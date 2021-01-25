import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import React from 'react';
import cn from 'classnames';
import classes from './Form.module.scss';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export const Form: React.FC<Props> = ({ style, className }) => {
  return (
    <div style={style} className={cn(classes.form_wrap, className)}>
      <h3 className={classes.form_header}>Заявка на проект</h3>
      <Input style={{ marginTop: '30px' }} type="text" placeholder="Имя*" />
      <Input
        style={{ marginTop: '30px' }}
        type="tel"
        placeholder="Электронная почта*"
      />
      <Input style={{ marginTop: '30px' }} type="email" placeholder="Имя*" />
      <Button style={{ marginTop: '30px' }} block>
        Получить предложение
      </Button>
    </div>
  );
};
