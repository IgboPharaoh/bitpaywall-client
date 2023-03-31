import React, { useContext } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import QRCode from 'react-qr-code';
import { AuthContext } from '../contexts/AuthContext';

const Qrcode = () => {
    const { lightningData } = useContext(AuthContext);
    return (
        <div>
            <Box>
                <Flex>
                    <QRCode height='100%' width='100%' value={lightningData.encoded.toLocaleUpperCase()} />
                </Flex>
            </Box>
            <Text>Scan the Qr code with an LNURL enabled wallet</Text>
        </div>
    );
};

export default Qrcode;
