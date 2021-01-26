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
  );
};
