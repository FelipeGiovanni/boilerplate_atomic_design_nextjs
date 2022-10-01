import React from 'react';
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  className?: string;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      className={[
        'px-2',
        'py-1',
        'w-56',
        'rounded-bl-3xl',
        'rounded-tr-3xl',
        'border',
        'border-primary',
        'text-dark',
        'focus:scale-105',
        'transition',
        'ease-out',
        'duration-300',
        'focus:ring-1',
        'focus:outline-none',
        'focus:ring-primary',
        className
      ].join(' ')}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';
