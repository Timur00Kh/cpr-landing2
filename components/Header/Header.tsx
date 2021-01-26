import React from 'react';
import {
  FreeIcon,
  GuaranteeIcon,
  Logo,
  PrepaymentIcon
} from '@/components/icons';
import { Button } from '@/components/Button/Button';
import { data } from '@/data';
import classes from './Header.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <div className={classes.header_inner}>
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
            <a href={`tel:${data.phone_plain}`}>{data.phone}</a>
          </h5>
          <Button block>заказать звонок</Button>
        </div>
      </div>
    </header>
  );
}
