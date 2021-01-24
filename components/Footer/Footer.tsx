import React from 'react';
import classes from './Footer.module.scss';
import {
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon
} from '@/components/Footer/icons';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_inner}>
        <div className={classes.icon_row}>
          <div className={classes.icon}>
            <YouTubeIcon />
          </div>
          <div className={classes.icon}>
            <InstagramIcon />
          </div>
          <div className={classes.icon}>
            <TelegramIcon />
          </div>
        </div>
        <div className={classes.footer_text}>
          © 2021 ЦПР, Все права защищены.
        </div>
      </div>
    </footer>
  );
}
