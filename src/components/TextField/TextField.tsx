import React from 'react';
import './Styles/StyleTextField.scss';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({ label, customSize = 'medium', error, ...props }) => {
  return (
    <div className={`custom-textfield custom-textfield--${customSize}`}>
      {label && <label className="textfield-label">{label}</label>}
      <input
        className={`textfield-input ${error ? 'textfield-input--error' : ''}`}
        {...props}
      />
      {error && <span className="textfield-error">{error}</span>}
    </div>
  );
};

export default TextField;


