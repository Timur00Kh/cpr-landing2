import React from 'react';
import cn from 'classnames';
import classes from './Button.module.scss';

interface Props {
  block?: boolean;
  tag?: 'button' | 'a';
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<Props> = ({
  children,
  block,
  tag = 'button',
  href,
  className,
  style
}) => {
  switch (tag) {
    case 'a':
      return (
        <a
          style={style}
          href={href}
          className={cn(classes.button, className, {
            [classes.block]: block
          })}
        >
          {children}
        </a>
      );
    case 'button':
    default:
      return (
        <button
          style={style}
          type="button"
          className={cn(classes.button, className, {
            [classes.block]: block
          })}
        >
          {children}
        </button>
      );
  }
};
