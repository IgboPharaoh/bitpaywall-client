import { Box, ModalHeader, ModalCloseButton, Text, ModalBody, VStack, ModalFooter, HStack } from '@chakra-ui/react';
import CustomButton from './CustomButton';

export interface PaymentSummaryProps {
    title: string;
    description: string;
    amount: number;
    generateArticleInvoice: () => Promise<void>;
}

const PaymentSummary = ({ title, description, amount, generateArticleInvoice }: PaymentSummaryProps) => {
    return (
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
                <CustomButton backgroundColor='#000000' onClick={generateArticleInvoice}>
                    Pay
                </CustomButton>
            </ModalFooter>
        </>
    );
};

export default PaymentSummary;
