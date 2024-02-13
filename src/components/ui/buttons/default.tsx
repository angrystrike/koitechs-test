import React from "react";

interface IProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const DefaultButton = (props: IProps) => {
  const { className, text, onClick } = props;

  return (
    <button
      className={`bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DefaultButton;