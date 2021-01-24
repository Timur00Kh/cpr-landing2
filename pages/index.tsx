import React from 'react';
import { FirstSection } from '@/segments/01. FirstSection/FirstSection';
import { SecondSection } from '@/segments/02. SecondSection/SecondSection';
import { ThirdSections } from '@/segments/03. ThirdSections/ThirdSections';
import { FourthAndFifthSection } from '@/segments/04. FourthAndFithSection/FourthAndFifthSection';
import { SixthSection } from '@/segments/06. SixthSection/SixthSection';

export default function Home(): JSX.Element {
  return (
    <>
      <FirstSection /> <SecondSection /> <ThirdSections />{' '}
      <FourthAndFifthSection /> <SixthSection />
    </>
  );
}
