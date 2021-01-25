import React from 'react';
import cn from 'classnames';
import classes from './Button.module.scss';

interface Props {
  block?: boolean;
  tag?: 'button' | 'a';
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const Button: React.FC<Props> = ({
  children,
  block,
  tag = 'button',
  href,
  className,
  style,
  onClick
}) => {
  switch (tag) {
    case 'a':
      return (
        <a
          onClick={onClick}
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
          onClick={onClick}
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
