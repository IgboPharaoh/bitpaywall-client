import Pill from './Pill';
import { GenericCardProps } from '../interfaces';
import { Box, Center, Flex, HStack, Stack, Text, Image } from '@chakra-ui/react';

const GenericCard = ({ categories, onClick, title, pubDate, author, thumbnail, description }: GenericCardProps): JSX.Element => {
    const getInitials = (arg: string) => {
        const args = arg.split(' ');
        if (args.length === 1) {
            return `${args[0]?.charAt(0) + args[0]?.charAt(1)}`;
        }

        return `${args[0]?.charAt(0) + args[1]?.charAt(0)}`;
    };

    const getEstimatedTime = (arg: string) => {
        const totalWords = arg.split('').join('').length;
        const totalTime = Math.round(totalWords / 350);  //assuming words read per minute is 350
        return totalTime;
    };

    return (
        <>
            <Box borderBottom='1px solid #afabab' pb='24px' pt='24px' onClick={onClick} cursor='pointer' maxW='720px'>
                <Stack>
                    <Flex alignItems='center' borderRadius='4px' pl='1px' gap='64px' justifyContent='space-between'>
                        <Stack width='495px'>
                            <Flex justifyContent='space-between' pb='8px' gap='32px'>
                                <Flex gap='8px'>
                                    {categories?.slice(0, 4).map((pill, index) => (
                                        <Pill key={index} title={pill} />
                                    ))}
                                </Flex>
                                <Text fontSize='15px' color='#706e6e'>
                                    {getEstimatedTime(description)} mins
                                </Text>
                            </Flex>
                            <HStack justifyContent='space-between'>
                                <Text fontSize='22px' fontWeight='700'>
                                    {title}
                                </Text>
                            </HStack>
                            <Flex paddingTop='16px' gap='12px' alignItems='center'>
                                <Center borderRadius='32px' bgColor='black' w='32px' h='32px'>
                                    <Text textTransform='uppercase' fontSize='12px' color='white'>
                                        {getInitials(author)}
                                    </Text>
                                </Center>

                                <Text fontSize='15px'>{author}</Text>
                                <Text color='#1a1a1a' fontSize='14px'>
                                    {pubDate}
                                </Text>
                            </Flex>
                        </Stack>
                        {thumbnail ? (
                            <Image objectFit='cover' src={thumbnail} alt='article-image' width='160px' height='160px' />
                        ) : (
                            <Center height='100px' w='160px' bgColor='black'>
                                <Text fontSize='20px' fontWeight='600' color='white'>
                                    QALA
                                </Text>
                            </Center>
                        )}
                    </Flex>
                </Stack>
            </Box>
        </>
    );
};

export default GenericCard;
