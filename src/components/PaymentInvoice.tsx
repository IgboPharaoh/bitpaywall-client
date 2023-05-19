import { FC, useState } from 'react';
import CustomButton from './CustomButton';
import QRCode from 'react-qr-code';
import { ModalHeader, ModalCloseButton, Text, ModalBody, ModalFooter, HStack, Input, Flex } from '@chakra-ui/react';

export interface PaymentInvoiceProps {
    paymentRequest: string;
    amount: number;
    back: () => void;
    confirmPayment: () => void;
}

const PaymentInvoice: FC<PaymentInvoiceProps> = ({ paymentRequest, amount, back, confirmPayment }) => {
    const [copy, setCopy] = useState('Copy');

    const handleCopyClick = () => {
        navigator.clipboard.writeText(paymentRequest).then(
            (value) => {
                console.log(value);
            },
            () => {
                console.error('failed to copy');
            }
        );
        setCopy('Copied');
        setTimeout(() => {
            setCopy('Copy');
        }, 3000);
    };
    return (
        <>
            <ModalHeader textTransform='uppercase' fontWeight='700' pb='8px' fontSize='20px'>
                Pay with lightning
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Flex width='100%' flexDir='column' alignItems='center'>
                    <QRCode height='100%' width='100%' value={paymentRequest} />
                    <HStack spacing='16px' pt='16px'>
                        <Input
                            bgColor='#eaeaea'
                            color='black'
                            fontWeight='500'
                            placeholder={paymentRequest}
                            defaultValue={paymentRequest}
                            readOnly
                            height='42px'
                        />
                        <CustomButton color='black' border='1px solid black' backgroundColor='transparent' onClick={handleCopyClick}>
                            {copy}
                        </CustomButton>
                    </HStack>
                </Flex>
                <HStack
                    justifyContent='center'
                    alignItems='center'
                    borderTop='1px solid #afabab'
                    borderBottom='1px solid #afabab'
                    mt='16px'
                    pb='8px'
                    pt='8px'
                >
                    <Text fontWeight='600' color='#2d2d2d' fontSize='18px'>
                        Amount:
                    </Text>
                    <Text fontWeight='700' color='#2d2d2d' fontSize='18px'>
                        {amount} sats
                    </Text>
                </HStack>
            </ModalBody>
            <ModalFooter justifyContent='space-between'>
                <Text
                    _hover={{ textDecor: 'underline' }}
                    onClick={back}
                    fontWeight='500'
                    color='#2d2d2d'
                    cursor='pointer'
                    textTransform='uppercase'
                    fontSize='15px'
                >
                    Back
                </Text>
                <CustomButton backgroundColor='#000000' onClick={confirmPayment}>
                    Confirm payment
                </CustomButton>
            </ModalFooter>
        </>
    );
};

export default PaymentInvoice;
