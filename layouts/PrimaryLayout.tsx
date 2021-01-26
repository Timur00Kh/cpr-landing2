import React, { Dispatch, SetStateAction, useReducer } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { NinthSection } from '@/segments/09. NinethSection/NinthSection';
import { CommonModal } from '@/components/CommonModal/CommonModal';
import { Form } from '@/components/Form/Form';
import { CallForm } from '@/components/CallForm/CallForm';
import classes from './PrimaryLayout.module.scss';

interface IPrimaryLayoutProps {
  children?: JSX.Element;
}

interface ModalProps {
  orderProj?: boolean;
  orderCall?: boolean;
}

const defaultModalValue: ModalProps = {
  orderCall: false,
  orderProj: false
};

// @ts-ignore
export const ModalContext = React.createContext<
  [ModalProps, Dispatch<SetStateAction<ModalProps>>]
  // @ts-ignore
>([]);

export function PrimaryLayout({ children }: IPrimaryLayoutProps): JSX.Element {
  const [modal, setModal] = useReducer(
    (s: ModalProps, a: ModalProps) => ({ ...s, ...a }),
    defaultModalValue
  );
  return (
    <ModalContext.Provider value={[modal, setModal]}>
      <Header />
      <main className={classes.main}>{children}</main>
      <NinthSection />
      <Footer />
      <CommonModal
        isOpen={modal.orderProj}
        toggle={() => setModal({ orderProj: !modal.orderProj })}
      >
        <Form />
      </CommonModal>
      <CommonModal
        isOpen={modal.orderCall}
        toggle={() => setModal({ orderCall: !modal.orderCall })}
      >
        <CallForm />
      </CommonModal>
    </ModalContext.Provider>
  );
}
