import React from "react";

interface IProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

const DefaultButton = (props: IProps) => {
  const { className, text, onClick, type = 'button'} = props;

  return (
    <button
      className={`bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default DefaultButton;