import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import '../customButton/styles/CustomButtonStyle.scss';


const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      className="custom-button"
      {...props}
    >
    </Button>
  );
};

export default CustomButton;

