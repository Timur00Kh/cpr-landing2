import React from 'react';
import { secondSectionItems } from '@/segments/02. SecondSection/items';
import { Button } from '@/components/Button/Button';
import classes from './SecondSection.module.scss';

export const SecondSection: React.FC = () => {
  return (
    <section className={classes.second_section}>
      <div className={classes.header_wrap}>
        <h2>одна команда - много продуктов</h2>
      </div>
      <div className={classes.second_section_items}>
        {secondSectionItems.map((item) => (
          <div className={classes.second_section_item} key={`item_${item.id}`}>
            <img
              className={classes.second_section_item_img}
              src={item.img}
              alt={item.title}
            />
            <h5
              style={{ marginBottom: '28px', marginTop: '28px' }}
              className={classes.second_section_item_header}
            >
              {item.title}
            </h5>
            <Button style={{ marginTop: 'auto' }} block>
              Узнать больше
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
