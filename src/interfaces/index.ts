import { ResponsiveObject, ResponsiveValue } from '@chakra-ui/react';

export interface CustomButtonProps {
    onClick: () => void;
    disabled: boolean;
    isLoading: boolean;
    height: string | number;
    borderRadius: string | number;
    backgroundColor: ResponsiveValue<string>;
    children: React.ReactNode;
    p: ResponsiveObject<string>;
    width: ResponsiveObject<string>;
    fontSize: ResponsiveObject<string>;
    border: ResponsiveValue<string>;
    color: ResponsiveValue<string>;
}

export interface PillProps {
    title: string;
}

export interface GenericCardProps {
    categories: Array<string>;
    onClick: () => void;
    title: string;
    description: string;
    author: string;
    pubDate: string;
    thumbnail: string;
}

export interface Article {
    author: string;
    categories: string;
    content: string;
    description: string;
    enclosure: object;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
}
