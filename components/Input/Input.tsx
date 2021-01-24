import React from 'react';
import classes from './Input.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: string;
}

export const Input: React.FC<Props> = ({ ...inputProps }) => {
  return <input {...inputProps} className={classes.input} />;
};
