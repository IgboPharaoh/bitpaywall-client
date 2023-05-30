import { useEffect, useState } from 'react';
import { ModalOverlay, Modal, ModalContent } from '@chakra-ui/react';
import { ArticleInvoice, ModalProps } from '../interfaces';

import { Axios, genInvoiceApi } from '../api/services';
import PaymentChecker from './PaymentChecker';
import PaymentSummary from './PaymentSummary';
import PaymentInvoice from './PaymentInvoice';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const CustomModal = ({ open, onCloseClickCallback, title, description, amount, guid }: ModalProps): JSX.Element => {
    const linkArr = guid.split('/');
    const articleId = linkArr[linkArr.length - 1];
    const userPubKey = 'bc1qgf60crqtlxn7279tgh8lsxzagmu97cyuwtykxwv026s9hwg427fsjvw7uz';
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [isConfirming, setIsConfirming] = useState(false);
    const [articleState, setArticleState] = useState<ArticleInvoice>({
        articleId,
        amount,
        userPubKey,
        hasPaid: false,
        paymentRequest: '',
        isPaying: false,
    });

    useEffect(() => {
        const socket = io(process.env.API_PATH || process.env.SOCKET_API_PATH || '');

        socket.on('connect', () => {
            console.log('connceted to the server');
        });

        socket.on('payment-confirmed', (data) => {
            if (data.paymentRequest === articleState.paymentRequest) {
                setArticleState({ ...articleState, hasPaid: true });
                setIsConfirming(false);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, [articleState.paymentRequest, articleState.hasPaid, articleState]);

    const checkPaidInvoices = () => setStep(2);

    const { paymentRequest } = articleState;

    const generateArticleInvoice = async () => {
        try {
            const res = await genInvoiceApi(articleId, articleState.hasPaid, amount, userPubKey);

            setArticleState((articleState) => ({ ...articleState, isPaying: false, paymentRequest: res.payReq, hasPaid: res?.article?.hasPaid }));

            if (res.payReq.length) {
                setStep(step + 1);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Modal size='lg' onClose={onCloseClickCallback} isOpen={open} isCentered>
                <ModalOverlay />
                <ModalContent>
                    {step === 0 && (
                        <>
                            <PaymentSummary title={title} description={description} amount={amount} generateArticleInvoice={generateArticleInvoice} />
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <PaymentInvoice
                                back={() => setStep(0)}
                                confirmPayment={checkPaidInvoices}
                                paymentRequest={paymentRequest}
                                amount={amount}
                            />
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <PaymentChecker
                                back={() => setStep(1)}
                                isConfirming={isConfirming}
                                navigateToArticle={() => {
                                    navigate(articleId, { state: { title, description } });
                                }}
                            />
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CustomModal;
