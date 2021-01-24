import React from 'react';
import {
  FreeIcon,
  GuaranteeIcon,
  Logo,
  PrepaymentIcon
} from '@/components/icons';
import { Button } from '@/components/Button/Button';
import classes from './Header.module.scss';

export function Header(): JSX.Element {
  const phone = '8 800 7777777';

  return (
    <header className={classes.header}>
      <Logo />
      <div className={classes.icon_flex}>
        <div>
          <FreeIcon />
          <h6 className={classes.icon_header}>Бесплатный расчёт</h6>
        </div>
        <div>
          <GuaranteeIcon />
          <h6 className={classes.icon_header}>Увеличенная гарантия</h6>
        </div>
        <div>
          <PrepaymentIcon />
          <h6 className={classes.icon_header}>Минимальный аванс</h6>
        </div>
      </div>
      <div className={classes.button_wrapper}>
        <h5 className={classes.number}>
          <a href={`tel:${phone.replace(' ', '')}`}>8 800 7777777</a>
        </h5>
        <Button block>заказать звонок</Button>
      </div>
    </header>
  );
}
