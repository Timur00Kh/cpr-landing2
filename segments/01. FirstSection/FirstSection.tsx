import React from 'react';
import { Input } from '@/components/Input/Input';
import {
  AndroidIcon,
  AppleIcon,
  ExperienceIcon,
  FreeIcon,
  GuaranteeIcon,
  OculusIcon,
  PrepaymentIcon,
  WindowsIcon,
  WorldSkillsCupIcon
} from '@/components/icons';
import { Button } from '@/components/Button/Button';
import classes from './FirstSection.module.scss';
import picture from './picture.png';

export const FirstSection: React.FC = () => {
  return (
    <section className={classes.section}>
      <div className={classes.second_div}>
        <div className={classes.form_wrap}>
          <h3 className={classes.form_header}>Заявка на проект</h3>
          <Input style={{ marginTop: '30px' }} type="text" placeholder="Имя*" />
          <Input
            style={{ marginTop: '30px' }}
            type="tel"
            placeholder="Электронная почта*"
          />
          <Input
            style={{ marginTop: '30px' }}
            type="email"
            placeholder="Имя*"
          />
          <Button style={{ marginTop: '30px' }} block>
            Получить предложение
          </Button>
        </div>
        <div style={{ width: '100%' }}>
          <img className={classes.vr_woman} src={picture} alt="vr_woman" />
          <div className={classes.div_in_second_div}>
            <div>
              <WorldSkillsCupIcon />
              <h6>Мы призеры World Skills</h6>
            </div>
            <div>
              <ExperienceIcon />
              <h6>Большой опыт разработки</h6>
            </div>
            <div>
              <div className={classes.icon_row}>
                <AndroidIcon />
                <AppleIcon />
                <WindowsIcon />
                <OculusIcon />
              </div>
              <h6>Любая платформа</h6>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header_wrap}>
        {' '}
        <h1>
          прокачайте свой бизнес с помощью виртуальной и дополненной реальности
        </h1>
        <div className={classes.header_icons}>
          <div>
            {' '}
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
      </div>
    </section>
  );
};
