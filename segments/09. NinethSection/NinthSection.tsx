import React from 'react';
import { ContactsCard } from '@/components/ContactsCard/ContactsCard';
import classes from './NinethSection.module.scss';

export const NinthSection: React.FC = () => {
  return (
    <section className={classes.section9}>
      <ContactsCard />
    </section>
  );
};
