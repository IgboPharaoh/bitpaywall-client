import { ModalHeader, ModalCloseButton, Text, ModalBody, ModalFooter, HStack, Flex, Spinner, Image } from '@chakra-ui/react';
import CustomButton from './CustomButton';
import timer from '../assets/timer.svg';
import arrow from '../assets/arrow.svg';

export interface PaymentCheckerProps {
    back: () => void;
    isConfirming: boolean;
    navigateToArticle: () => void;
}

const PaymentChecker = ({ back, isConfirming, navigateToArticle }: PaymentCheckerProps) => {
    return (
        <>
            {isConfirming ? (
                <>
                    <ModalHeader textTransform='uppercase' fontWeight='700' pb='8px' fontSize='20px'>
                        Confirming your payment
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex width='100%' flexDir='column' alignItems='center'>
                            <Text>Please wait while we are confirming your payment</Text>
                            <Flex alignItems='center' p='32px 0px'>
                                <Image h='100px' src={timer} alt='timer' />
                            </Flex>
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
                                Status:
                            </Text>
                            <Text color='#2d2d2d' fontWeight='700' fontSize='18px'>
                                Pending
                            </Text>
                            <Spinner size='md' color='#407BFF' thickness='3px' emptyColor='gray.200' />
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
                        <CustomButton disabled={true} backgroundColor='#000000'>
                            Go to article
                        </CustomButton>
                    </ModalFooter>
                </>
            ) : (
                <>
                    <ModalHeader textTransform='uppercase' fontWeight='700' pb='8px' fontSize='20px'>
                        Payment verified
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex width='100%' flexDir='column' alignItems='center'>
                            <Text>Success !!! read to your heart's content</Text>
                            <Flex alignItems='center' p='32px 0px'>
                                <Image h='100px' src={arrow} alt='timer' />
                            </Flex>
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
                                Status:
                            </Text>
                            <>
                                <Text color='green' fontWeight='700' fontSize='18px'>
                                    Success
                                </Text>
                            </>
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
                        <CustomButton disabled={true} onClick={navigateToArticle} backgroundColor='#000000'>
                            Go to article
                        </CustomButton>
                    </ModalFooter>
                </>
            )}
        </>
    );
};

export default PaymentChecker;
