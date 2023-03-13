import { Box, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';

const Article = (): JSX.Element => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <Box ml='80px' mr='80px'>
                <Text pb='16px' fontSize='32px' dangerouslySetInnerHTML={{ __html: location?.state?.title }}></Text>
                <Text dangerouslySetInnerHTML={{ __html: location?.state?.description }}></Text>
            </Box>
        </div>
    );
};

export default Article;
