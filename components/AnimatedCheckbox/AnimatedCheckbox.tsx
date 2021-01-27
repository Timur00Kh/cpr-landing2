import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import classes from './AnimatedCheckbox.module.scss';

export const AnimatedCheckbox: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <svg
      className={cn(classes.svg_start, {
        [classes.svg_end]: checked
      })}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#525BE2" d="M1 1h22v22H1z" />
      <path d="M5 12.417L9.4 17 19 7" stroke="#fff" />
    </svg>
  );
};
