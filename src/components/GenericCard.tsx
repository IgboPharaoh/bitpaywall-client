import Pill from './Pill';
import { GenericCardProps } from '../interfaces';
import { Box, Center, Flex, HStack, Stack, Text, Image } from '@chakra-ui/react';

const GenericCard = ({
    pills,
    onClick,
    estimatedTime,
    title,
    description,
    date,
    author,
    imageUrl,
    authorImageUrl,
}: Partial<GenericCardProps>): JSX.Element => {
    return (
        <>
            <Box onClick={onClick} cursor='pointer' maxW='720px'>
                <Stack>
                    <Flex alignItems='center' borderRadius='4px' pt='16px' pl='1px' gap='64px' justifyContent='space-between'>
                        <Stack>
                            <Flex pb='8px' gap='32px'>
                                <Flex gap='8px'>
                                    {pills?.map((pill, index) => (
                                        <>
                                            <Pill key={index} title={pill} />
                                        </>
                                    ))}
                                </Flex>
                                <Text fontSize='15px' color='#706e6e'>
                                    {estimatedTime} mins
                                </Text>
                            </Flex>
                            <HStack justifyContent='space-between'>
                                <Text fontSize='22px' fontWeight='700'>
                                    {title}
                                </Text>
                            </HStack>
                            <Text fontSize='15px' fontWeight='300'>
                                {description}
                            </Text>
                            <Flex paddingTop='16px' gap='12px' alignItems='center'>
                                {authorImageUrl ? (
                                    <Image src={authorImageUrl} alt='author-image' width='32px' height='32px' />
                                ) : (
                                    <Center borderRadius='32px' bgColor='black' w='32px' h='32px'>
                                        <Text fontSize='12px' color='white'>
                                            PO
                                        </Text>
                                    </Center>
                                )}

                                <Text fontSize='15px'>{author}</Text>
                                <Text color='#1a1a1a' fontSize='14px'>
                                    {date || new Date().toLocaleDateString()}
                                </Text>
                            </Flex>
                        </Stack>
                        {imageUrl ? (
                            <Image src={imageUrl} alt='article-image' width='160px' height='160px' />
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
