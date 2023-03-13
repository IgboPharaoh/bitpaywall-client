import { Box, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import GenericCard from './components/GenericCard';
import Header from './components/Header';
import { useArticlesHook } from './hooks/useArticlesHook';

function App() {
    const { articles, getAllArticles } = useArticlesHook();

    useEffect(() => {
        getAllArticles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='App'>
            <Header />
            <Box ml='80px' mr='80px'>
                <Text>Stay up to date with the current happenings with Mailito</Text>
                <Stack spacing='32px'>
                    {articles.map((article: any, index: number) => (
                        <GenericCard key={index} {...article} />
                    ))}
                </Stack>
            </Box>
        </div>
    );
}

export default App;
