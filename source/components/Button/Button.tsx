import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * ------------------------------------------
 * @description 2025-01-14 package deploy test
 * ------------------------------------------
 */
export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <button {...rest}>
      {children}
      빌드테스트
    </button>
  );
};
