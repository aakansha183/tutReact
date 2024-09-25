import { forwardRef } from 'react';
import './styles/CustomButtonStyle.scss'
import { CustomButtonProps } from '../../utils/interfaces/types';

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'primary', size = 'medium', ...props }, ref) => {
    return (
      <button ref={ref} className={`custom-button ${variant} ${size}`} {...props}>
      </button>
    );
  }
);

export default CustomButton;
