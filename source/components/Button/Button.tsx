import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * ------------------------------------------
 * @description
 * - 2025-01-14 package deploy test
 * - 2025-01-29 package tailwind setting
 * ------------------------------------------
 */
export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className="inline-flex border py-2 px-4 text-sm rounded-full dark:bg-gray-800 dark:text-white">
      {props.children}
    </button>
  );
};
