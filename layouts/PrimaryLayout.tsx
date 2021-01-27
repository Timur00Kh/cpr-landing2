import React, { Dispatch, SetStateAction, useReducer } from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { NinthSection } from '@/segments/09. NinethSection/NinthSection';
import { CommonModal } from '@/components/CommonModal/CommonModal';
import { Form } from '@/components/Form/Form';
import { CallForm } from '@/components/CallForm/CallForm';
import { AnimatedCheckbox } from '@/components/AnimatedCheckbox/AnimatedCheckbox';
import { Button } from '@/components/Button/Button';
import classes from './PrimaryLayout.module.scss';

interface IPrimaryLayoutProps {
  children?: JSX.Element;
}

interface ModalProps {
  orderProj?: boolean;
  orderCall?: boolean;
  success?: boolean;
}

const defaultModalValue: ModalProps = {
  orderCall: false,
  orderProj: false,
  success: false
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
      <CommonModal
        isOpen={modal.success}
        toggle={() => setModal({ success: !modal.success })}
      >
        <form className={classes.success_form}>
          <div className={classes.success_inner}>
            <div>
              <h3 className={classes.success_form_header}>Заявка отправлена</h3>
            </div>
            <div>
              <AnimatedCheckbox />
            </div>
            <Button block onClick={() => setModal({ success: false })}>
              Закрыть
            </Button>
          </div>
        </form>
      </CommonModal>
    </ModalContext.Provider>
  );
}
