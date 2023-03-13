import React from 'react';
import { Article } from '../interfaces';

export const useArticlesHook = () => {
    const [articles, setArticles] = React.useState<Array<Article>>([]);

    const getAllArticles = async () => {
        const url = `https://medium.com/feed/aiko-ai`;
        const RSS_CONVERTER = `https://api.rss2json.com/v1/api.json?rss_url=${url}`;

        try {
            const response = await fetch(RSS_CONVERTER);
            const result = await response.json();
            if (result) {
                setArticles(result.items);
                console.log(result.items);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        articles,
        getAllArticles,
    };
};
