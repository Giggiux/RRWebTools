import React from 'react';
import tw from 'twin.macro';

const CardContainer = tw.div`
  m-4 p-6 text-left no-underline border border-gray-200 rounded transition-colors
  hocus:(text-blue-500 border-blue-500)
`;

type CardProps = {
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <CardContainer className={className}>{children}</CardContainer>;
};

export default Card;
