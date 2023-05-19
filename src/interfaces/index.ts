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

export interface Article {
    author: string;
    categories: Array<string>;
    content: string;
    description: string;
    enclosure: object;
    guid: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    title: string;
}

export interface ModalProps {
    open: boolean;
    onCloseClickCallback: () => void;
    openDrawer: () => void;
    title: string;
    description: string;
    amount: number;
    guid: string;
}

export interface HeaderProps {
    bottomText?: string;
}

export type AxiosErrorObj = {
    error: string;
    msg: string;
    data: any;
};

export interface ArticleInvoice {
    paymentRequest: string;
    hasPaid: boolean;
    articleId: string;
    amount: number;
    userPubKey: string;
    isPaying: boolean;
}

export interface CreateInvoiceObj {
    article: { articleId: string; hasPaid: boolean };
    payReq: string;
    userPubKey: string;
}

export interface LightningData {
    url: string;
    secret: string;
    encoded: string;
}

export interface LnAuthContext {
    handleLightningLogin: () => void;
    lightningData: LightningData;
}
