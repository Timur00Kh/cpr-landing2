import React, { Dispatch, SetStateAction, useReducer, useState } from 'react';
import { FirstSection } from '@/segments/01. FirstSection/FirstSection';
import { SecondSection } from '@/segments/02. SecondSection/SecondSection';
import { ThirdSections } from '@/segments/03. ThirdSections/ThirdSections';
import { FourthAndFifthSection } from '@/segments/04. FourthAndFithSection/FourthAndFifthSection';
import { SixthSection } from '@/segments/06. SixthSection/SixthSection';
import { SeventhSection } from '@/segments/07. SeventhSection/SeventhSection';
import { EighthSection } from '@/segments/08. EighthSection/EighthSection';
import { Head } from '@/components/Head';
import { data } from '@/data';

export default function Home(): JSX.Element {
  return (
    <>
      <Head
        title={data.title}
        description={data.description}
        keywords={data.keywords}
      />
      <FirstSection /> <SecondSection /> <ThirdSections />{' '}
      <FourthAndFifthSection /> <SixthSection /> <SeventhSection />{' '}
      <EighthSection />
    </>
  );
}
