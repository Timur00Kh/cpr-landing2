import React, { useMemo } from 'react';
import { FirstSection } from '@/segments/01. FirstSection/FirstSection';
import { SecondSection } from '@/segments/02. SecondSection/SecondSection';
import { ThirdSections } from '@/segments/03. ThirdSections/ThirdSections';
import { FourthAndFifthSection } from '@/segments/04. FourthAndFithSection/FourthAndFifthSection';
import { SixthSection } from '@/segments/06. SixthSection/SixthSection';
import { SeventhSection } from '@/segments/07. SeventhSection/SeventhSection';
import { EighthSection } from '@/segments/08. EighthSection/EighthSection';
import { Head } from '@/components/Head';
import { data } from '@/data';
import { useRouter } from 'next/router';

export default function Home(): JSX.Element {
  const router = useRouter();
  const pol = useMemo(() => {
    if (router.query?.slug?.length) {
      return router.query.slug[0] === 'policy';
    }
    return false;
  }, [router.query]);
  return (
    <>
      {pol ? (
        <Head
          title="Политика конфиденциальности"
          description="Данная Политика Конфиденциальности применима ко всей личной информации и полученными или использованными данными на настоящем сайте и всех сайтах, на которые ссылается настоящий сайт."
        />
      ) : (
        <Head
          title={data.title}
          description={data.description}
          keywords={data.keywords}
        />
      )}
      <FirstSection /> <SecondSection /> <ThirdSections />{' '}
      <FourthAndFifthSection /> <SixthSection /> <SeventhSection />{' '}
      <EighthSection />
    </>
  );
}
