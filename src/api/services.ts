import axios, { AxiosError } from 'axios';
import { AxiosErrorObj, CreateInvoiceObj } from '../interfaces';
import axiosInstance from './axios';

axios.defaults.baseURL = process.env.API_PATH;

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
export const genInvoiceApi = async (
    articleId: number,
    hasPaid: boolean,
    amount: number,
    userPubKey: string
): Promise<CreateInvoiceObj | undefined> => {
    const params = { articleId, hasPaid, amount, userPubKey };
    try {
        const response: CreateInvoiceObj = await axiosInstance.get(`/pay-invoice/${articleId}`, { params });
        return response;
    } catch (error) {
        console.log(error);
    }
};

// get all user paid invoice
export const getUserPaidArticlesApi = async (
    articleId: number,
    hasPaid: boolean,
    amount: number,
    userPubKey: string
): Promise<CreateInvoiceObj | undefined> => {
    const params = { articleId, hasPaid, amount, userPubKey };
    try {
        const response: CreateInvoiceObj = await axiosInstance.get(`/pay-invoice/${articleId}`, { params });
        return response;
    } catch (error) {
        console.log(error);
    }
};
