import { Button } from '@chakra-ui/react';
import { CustomButtonProps } from '../interfaces';

const CustomButton = ({ children, ...props }: Partial<CustomButtonProps>): JSX.Element => {
    return (
        <div>
            <Button
                fontSize={{ base: '12px', md: '13px', lg: '14px' }}
                p={{ base: '10px', md: '13px', lg: '16px' }}
                fontWeight='600'
                backgroundColor='#001247'
                borderRadius='32px'
                color='white'
                {...props}
            >
                {children}
            </Button>
        </div>
    );
};

export default CustomButton;
