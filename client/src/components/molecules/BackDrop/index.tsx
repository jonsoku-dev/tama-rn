import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Modal from '../../atoms/Modal/index';

interface Props {
  menuIsOpen: boolean;
  onClose: any;
}

const BackDrop = ({ menuIsOpen, onClose }: Props) => {
  return (
    <CSSTransition
      in={menuIsOpen}
      className="modal-transition"
      classNames="modal-transition"
      unmountOnExit
      timeout={duration}
    >
      <ModalWithTransitionStyles zIndex={100}>
        <MenuContainer onClick={onClose} />
      </ModalWithTransitionStyles>
    </CSSTransition>
  );
};

const duration = 300;

const ModalWithTransitionStyles = styled(Modal)`
  &.modal-transition-enter {
    opacity: 0;
  }
  &.modal-transition-enter-active {
    transition: opacity ${duration}ms;
    opacity: 1;
  }
  &.modal-transition-exit {
    opacity: 1;
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    opacity: 0;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default BackDrop;
