import { Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { HeaderProps } from '../interfaces';

const Header = ({ bottomText }: HeaderProps) => {
    const navigate = useNavigate();
    return (
        <div>
            <Flex ml='80px' mr='80px' gap='64px' justifyContent='space-between'>
                <HStack width='100%' justifyContent='space-between'>
                    <Stack spacing='0px'>
                        <Text onClick={() => navigate('/')} fontSize='54px' fontWeight='600' color='black' cursor='pointer'>
                            Mailto
                        </Text>
                        <Text fontWeight='300'>{bottomText}</Text>
                    </Stack>
                </HStack>
            </Flex>
        </div>
    );
};

export default Header;
