import React from "react";

interface IProps {
  placeholder: string;
  className?: string;
  value: string;
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IProps) => {
  const { className = '', placeholder = '', value, onChange = () => {}, isRequired = true } = props;

  return (
    <input
      type="text"
      className={`w-64 border rounded-lg outline-none ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...(isRequired ? { required: true } : {})}
    />
  );
};

export default Input;