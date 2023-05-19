import axios, { AxiosError } from 'axios';
import { ArticleInvoice, AxiosErrorObj, CreateInvoiceObj } from '../interfaces';

const Axios = axios.create({
    baseURL: 'http://localhost:3001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// login with lnurl
export const loginWithLnUrl = async (): Promise<any> => {
    try {
        const response = await axios.get('/user/login-lnurl');
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const serveError = error as AxiosError<AxiosErrorObj>;
            if (serveError && serveError.response) {
                return serveError.response.data;
            }
        }
    }
};

// create invoice to pay article
export const genInvoiceApi = async (articleId: string, hasPaid: boolean, amount: number, userPubKey: string): Promise<CreateInvoiceObj> => {
    const body = { hasPaid, amount, userPubKey };

    try {
        const { data } = await Axios.post(`/pay-invoice/${articleId}`, body);
        return data.data;
    } catch (error) {
        console.log(error);
        throw new Error(`Oops cannot create an invocie for article no ${articleId}`);
    }
};

export const getInvoicePaymentStatus = () => {};

// get all user paid invoice
export type ArticleArray = Omit<ArticleInvoice, 'paymentRequest' | 'isPaying'>;

export const getUserPaidArticlesApi = async (userPubKey: string): Promise<ArticleArray[]> => {
    try {
        const response: { data: ArticleArray[] } = await axios.get(`/paid-articles/${userPubKey}'`);
        return Promise.resolve(response?.data);
    } catch (error) {
        console.log(error);
        throw new Error(`Error getting all articles for user ${userPubKey}`);
    }
};
