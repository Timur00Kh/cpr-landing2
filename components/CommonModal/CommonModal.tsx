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
      <button type="submit" onClick={toggle} className={classes.close}>
        <CloseIcon />
      </button>
    </Modal>
  );
};

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L17 17" stroke="#EB5757" strokeWidth="2" />
      <path d="M17 1L1 17" stroke="#EB5757" strokeWidth="2" />
    </svg>
  );
}
