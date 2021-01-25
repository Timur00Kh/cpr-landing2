import React from 'react';
import classes from './Footer.module.scss';
import {
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon
} from '@/components/Footer/icons';
import { data } from '@/data';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_inner}>
        <div className={classes.icon_row}>
          <a
            rel="noreferrer"
            target="_blank"
            href={data.youtube}
            className={classes.icon}
          >
            <YouTubeIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={data.instagram}
            className={classes.icon}
          >
            <InstagramIcon />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={data.telegram}
            className={classes.icon}
          >
            <TelegramIcon />
          </a>
        </div>
        <div className={classes.footer_text}>
          © 2021 ЦПР, Все права защищены.
        </div>
      </div>
    </footer>
  );
}
