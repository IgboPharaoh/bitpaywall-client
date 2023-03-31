import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Article from './Article';
import AuthPage from './AuthPage';
import { AuthContextProvider } from './contexts/AuthContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: ':id',
        element: <Article />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <AuthContextProvider>
                <RouterProvider router={router} />
            </AuthContextProvider>
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
