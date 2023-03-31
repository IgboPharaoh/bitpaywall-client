import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import { loginWithLnUrl } from '../api/services';
import { LnAuthContext } from '../interfaces';

const SOCKET_URL = process.env.SOCKET_API_PATH || '';

const socket = io(SOCKET_URL, {
    transports: ['websocker'],
});

const defaultState = {
    lightningData: { url: '', secret: '', encoded: '' },
    handleLightningLogin: () => {},
};

export const AuthContext = createContext<LnAuthContext>(defaultState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [lightningData, setLightningData] = useState(defaultState.lightningData);
    // const navigate = useNavigate();

    useEffect(() => {
        const getSocketEvents = () => {
            socket.on('auth', (data: any) => {
                if (data.key) {
                    // navigate('/');
                }
            });
        };

        getSocketEvents();
    }, []);

    const handleLightningLogin = async () => {
        const response = await loginWithLnUrl();
        setLightningData(response.data);
    };

    const value = {
        lightningData,
        handleLightningLogin,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
