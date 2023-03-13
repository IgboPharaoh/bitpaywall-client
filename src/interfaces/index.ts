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
