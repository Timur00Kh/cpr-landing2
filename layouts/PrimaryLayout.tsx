import React from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import classes from './PrimaryLayout.module.scss';
import { NinthSection } from '@/segments/09. NinethSection/NinthSection';

interface IPrimaryLayoutProps {
  children?: JSX.Element;
}

export function PrimaryLayout({ children }: IPrimaryLayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <main className={classes.main}>{children}</main>
      <NinthSection />
      <Footer />
    </div>
  );
}
