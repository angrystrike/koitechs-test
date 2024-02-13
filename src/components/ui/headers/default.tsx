import React from "react";

interface IProps {
  text: string;
  className?: string;
}

const DefaultHeader = (props: IProps) => {
  const { className, text } = props;

  return (
    <h2
      className={`text-2xl font-bold ${className}`}
    >
      {text}
    </h2>
  );
};

export default DefaultHeader;