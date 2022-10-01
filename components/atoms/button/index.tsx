import React, { forwardRef } from 'react';

type ButtonProps = {
  primary?: boolean;
  small?: boolean;
  medium?: boolean;
  children: any;
  className?: string;
  disabled?: boolean;
  warning?: boolean;
  onClick?: (event: any) => void;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ primary, warning, disabled, small, medium, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        disabled={disabled}
        className={
          className
            ? className
            : [
                'leading-5',
                'transition-colors',
                'duration-500',
                'transform',
                'rounded-bl-3xl',
                'rounded-tr-3xl',
                'rounded-br',
                'rounded-tl',
                'shadow-md',
                'py-4',
                'w-44',
                'hover:scale-105',
                'transition',
                'ease-out',
                'duration-300',
                'opacity-75',
                'bg-secondary',
                'text-dark',
                'hover:opacity-80',
                'active:opacity-100',
                primary && ['bg-primary text-white'],
                warning && ['bg-danger text-white rounded-none'],
                medium && ['py-1 w-28'],
                small && ['py-1 w-16']
              ].join(' ')
        }
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
