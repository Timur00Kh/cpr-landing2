import React, { useContext } from 'react';
import { thirdSectionItems } from '@/segments/03. ThirdSections/items';
import { Button } from '@/components/Button/Button';
import { ModalContext } from '@/layouts/PrimaryLayout';
import classes from './ThirdSections.module.scss';

export const ThirdSections: React.FC = () => {
  const [, setModal] = useContext(ModalContext);
  return (
    <section className={classes.third_section}>
      <div className={classes.header_wrap}>
        <h2>сферы применения</h2>
      </div>
      <div className={classes.third_section_item_wrapper}>
        {thirdSectionItems.map((item) => {
          const Icon: React.FC = item.icon;
          return (
            <div key={`item_${item.id}`} className={classes.third_section_item}>
              <Icon />
              <h5>{item.title}</h5>
            </div>
          );
        })}
      </div>
      <div className={classes.button_wrap}>
        <div>
          <Button onClick={() => setModal({ orderCall: true })} block>
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};
