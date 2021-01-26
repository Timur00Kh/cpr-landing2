import React from 'react';
import { Modal } from 'reactstrap';
import cn from 'classnames';
import classes from './CommonModal.module.scss';

interface Props {
  isOpen?: boolean;
  toggle?: () => void;
  className?: string;
}

export const CommonModal: React.FC<Props> = ({
  isOpen,
  toggle,
  className,
  children
}) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className={cn(className, classes.common_modal)}
      centered
    >
      {children}
    </Modal>
  );
};
