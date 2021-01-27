import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import IMask from 'imask';
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

interface PhoneProps extends Props {
  onAccept: (v: { value: string; unmaskedValue: string }) => void;
}

export const PhoneInput: React.FC<PhoneProps> = ({
  error,
  onAccept,
  value,
  ...inputProps
}) => {
  const input = useRef<HTMLInputElement>(null);
  const [mask, setMask] = useState<any>();

  useEffect(() => {
    function listner(e) {
      if (e.key === '8' && (e.target as HTMLInputElement).value.length < 4) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    let tempMask;
    if (input?.current && onAccept) {
      input.current.addEventListener('keydown', listner);
      tempMask = IMask(input.current, {
        mask: '+{7} (000) 000-00-00'
      });
      setMask(tempMask);
      tempMask.value = '+7';
      tempMask.on('accept', () => {
        onAccept({
          value: tempMask.value,
          unmaskedValue: tempMask.unmaskedValue
        });
      });
    }
    return () => {
      input?.current?.removeEventListener('keydown', listner);
      tempMask.destroy();
    };
  }, [input]);

  useEffect(() => {
    if (mask !== undefined && typeof value === 'string') {
      mask.value = value;
      mask.updateValue();
    }
  }, [mask, value]);

  return (
    <input
      type="tel"
      ref={input}
      {...inputProps}
      className={cn(classes.input, {
        [classes.error]: error
      })}
    />
  );
};
