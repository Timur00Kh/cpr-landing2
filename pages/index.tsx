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
import { CommonModal } from '@/components/CommonModal/CommonModal';
import { Button } from '@/components/Button/Button';
import { Form } from '@/components/Form/Form';

interface ModalProps {
  orderProj?: boolean;
  orderCall?: boolean;
}

const defaultModalValue: ModalProps = {
  orderCall: false,
  orderProj: false
};

export const ModalContext = React.createContext<
  [ModalProps, Dispatch<SetStateAction<ModalProps>>]
  // @ts-ignore
>([]);

export default function Home(): JSX.Element {
  const [modal, setModal] = useReducer(
    (s: ModalProps, a: ModalProps) => ({ ...s, ...a }),
    defaultModalValue
  );

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      <Head
        title={data.title}
        description={data.description}
        keywords={data.keywords}
      />
      <FirstSection /> <SecondSection /> <ThirdSections />{' '}
      <FourthAndFifthSection /> <SixthSection /> <SeventhSection />{' '}
      <EighthSection />
      <CommonModal
        isOpen={modal.orderProj}
        toggle={() => setModal({ orderProj: !modal.orderProj })}
      >
        <Form />
      </CommonModal>
    </ModalContext.Provider>
  );
}
