/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import cn from 'classnames';
import classes from './Checkbox.module.scss';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
}

export const Checkbox: React.FC<Props> = ({
  id,
  checked,
  style,
  className,
  ...props
}) => {
  return (
    <>
      <input {...props} id={id} type="checkbox" style={{ display: 'none' }} />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        className={cn(className, classes.checkbox, {
          [classes.checked]: checked,
          [classes.unchecked]: !checked
        })}
        style={style}
        htmlFor={id}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="22"
            stroke="#525BE2"
            strokeWidth="2"
          />

          <path d="M5 12.4167L9.4 17L19 7" stroke="white" strokeWidth="2" />
        </svg>
      </label>
    </>
  );
};
