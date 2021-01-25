import React from 'react';
import { Form } from '@/components/Form/Form';
import classes from './SeventhSection.module.scss';
import img from './img.png';

export const SeventhSection: React.FC = () => {
  return (
    <section className={classes.section7}>
      <div className={classes.header_wrap}>
        <h2>НАПИШИТЕ НАМ И МЫ НАЙДЕМ РЕШЕНИЕ ДЛЯ ВАШЕГО БИЗНЕСА</h2>
      </div>
      <div className={classes.section7_items}>
        <div className={classes.section7_item}>
          <img className={classes.section7_img} src={img} alt="Hand shaking" />
        </div>
        <div className={classes.section7_item}>
          <Form />
        </div>
      </div>
    </section>
  );
};
