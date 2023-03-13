import { Flex, HStack, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <div>
            <Flex ml='80px' mr='80px' gap='64px' justifyContent='space-between'>
                <HStack width='100%' justifyContent='space-between'>
                    <Text fontSize='54px' fontWeight='600' color='black' cursor='pointer'>
                        Mailto
                    </Text>
                </HStack>
            </Flex>
        </div>
    );
};

export default Header;
