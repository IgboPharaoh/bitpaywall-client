import { useState } from 'react';
import {
    ModalOverlay,
    Box,
    Modal,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Text,
    ModalBody,
    VStack,
    ModalFooter,
    HStack,
    Input,
    Flex,
} from '@chakra-ui/react';
import { ModalProps } from '../interfaces';
import CustomButton from './CustomButton';
import QRCode from 'react-qr-code';

const CustomModal = ({ open, onCloseClickCallback, openDrawer, title, description, amount }: ModalProps): JSX.Element => {
    const [step, setStep] = useState(0);
    const [copy, setCopy] = useState('Copy');

    const paymentRequest = '234322kjnsjnjsbkjfs';
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
        <div>
            <Modal size='lg' onClose={onCloseClickCallback} isOpen={open} isCentered>
                <ModalOverlay />
                <ModalContent>
                    {step === 0 && (
                        <>
                            <ModalHeader textTransform='uppercase' fontWeight='700' pb='4px' fontSize='20px'>
                                Complete Payment
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <VStack alignItems='flex-start' justifyContent='space-between'>
                                    <Text color='#2d2d2d' fontWeight='500' fontSize='16px'>
                                        {title}
                                    </Text>
                                    <Box>
                                        <Text
                                            fontSize='15px'
                                            borderRadius='32px'
                                            dangerouslySetInnerHTML={{ __html: `${description.substring(1, 250)}.........` }}
                                        ></Text>
                                        <Text fontSize='16px' pt='16px'>
                                            Interesting right?
                                        </Text>
                                        <Text color='#2d2d2d' fontSize='15px'>
                                            To continue enjoy this article please pay some sats
                                        </Text>
                                        <HStack borderTop='1px solid #afabab' borderBottom='1px solid #afabab' mt='16px' pb='8px' pt='8px'>
                                            <Text fontWeight='600' color='#2d2d2d' fontSize='18px'>
                                                Amount:
                                            </Text>
                                            <Text fontWeight='700' color='#2d2d2d' fontSize='18px'>
                                                {amount} sats
                                            </Text>
                                        </HStack>
                                    </Box>
                                </VStack>
                            </ModalBody>
                            <ModalFooter>
                                <CustomButton backgroundColor='#000000' onClick={() => setStep(1)}>
                                    Pay
                                </CustomButton>
                            </ModalFooter>
                        </>
                    )}
                    {step === 1 && (
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
                                    onClick={() => setStep(0)}
                                    fontWeight='500'
                                    color='#2d2d2d'
                                    cursor='pointer'
                                    textTransform='uppercase'
                                    fontSize='15px'
                                >
                                    Back
                                </Text>
                                <CustomButton backgroundColor='#000000' onClick={openDrawer}>
                                    Complete
                                </CustomButton>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CustomModal;
