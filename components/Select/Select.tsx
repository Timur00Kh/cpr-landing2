import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import classes from './Select.module.scss';

interface Props {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const Select: React.FC<Props> = ({ value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div onMouseLeave={() => setOpen(false)} className={classes.select}>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className={classes.select_btn}
      >
        {value}
      </button>
      {open && (
        <div className={classes.options}>
          {options.map((option, i) => (
            <button
              className={classes.option}
              // eslint-disable-next-line react/no-array-index-key
              key={`${option}_${i}`}
              type="button"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
