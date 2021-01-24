import React from 'react';
import { ContactsCard } from '@/components/ContactsCard/ContactsCard';
import classes from './NinethSection.module.scss';
import map from './map.png';

export const NinthSection: React.FC = () => {
  return (
    <section className={classes.section9}>
      <div className={classes.map}>
        <div className={classes.map_inner}>
          <ContactsCard style={{ maxWidth: '480px' }} />
        </div>
      </div>
      <div className={classes.contacts_mob}>
        <ContactsCard />
      </div>
    </section>
  );
};
