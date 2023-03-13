import { Box, Text } from '@chakra-ui/react';
import { PillProps } from '../interfaces';

const Pill = ({ title }: PillProps): JSX.Element => {
    return (
        <Box cursor='pointer' p='4px 12px'  w='fit-content' borderRadius='32px' bgColor='#eaeaea'>
            <Text fontSize='12px' color='#2d2d2d'>{title}</Text>
        </Box>
    );
};

export default Pill;
