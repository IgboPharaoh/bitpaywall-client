import React, { useContext } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import CustomButton from './components/CustomButton';
import Header from './components/Header';
import { AuthContext } from './contexts/AuthContext';
import Qrcode from './components/Qrcode';

const AuthPage = () => {
    const { lightningData, handleLightningLogin } = useContext(AuthContext);
    return (
        <>
            <Box>
                <Header bottomText='Create an account to learn how to stack some sats' />
                <Flex textAlign='center' height='80vh' justifyContent='center' alignItems='center'>
                    <Box>
                        {lightningData?.encoded ? (
                            <Qrcode />
                        ) : (
                            <Stack
                                boxShadow=' rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;'
                                borderRadius='24px'
                                p='24px'
                            >
                                <Text>You must be logged in to read articles </Text>
                                <Text pb='12px'> as your privacy is our concern</Text>
                                <CustomButton onClick={handleLightningLogin}>⚡ Login with lightning</CustomButton>
                            </Stack>
                        )}
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default AuthPage;
