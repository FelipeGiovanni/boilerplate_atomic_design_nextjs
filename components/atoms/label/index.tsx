import React from 'react';
import { DetailedHTMLProps, LabelHTMLAttributes, forwardRef } from 'react';

export type LabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & {
  className?: string;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return <label className={`text-white ${className}`} {...props} ref={ref} />;
});

Label.displayName = 'Label';
