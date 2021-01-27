import React from 'react';
import { ContactsCard } from '@/components/ContactsCard/ContactsCard';
import { data } from '@/data';
import classes from './NinethSection.module.scss';

export const NinthSection: React.FC = () => {
  return (
    <section className={classes.section9}>
      <div className={classes.map}>
        <iframe
          className={classes.iframe}
          title="IT Park"
          src={data.yamap_link}
          width="100%"
          height="544"
          frameBorder="0"
        />
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
