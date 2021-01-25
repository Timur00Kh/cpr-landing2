import React from 'react';
import cn from 'classnames';
import classes from './Input.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string;
  error?: boolean;
}

export const Input: React.FC<Props> = ({ error, ...inputProps }) => {
  return (
    <input
      {...inputProps}
      className={cn(classes.input, {
        [classes.error]: error
      })}
    />
  );
};
