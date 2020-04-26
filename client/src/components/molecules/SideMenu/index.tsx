import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { IRootState } from '../../../store/reducers/index';
import Modal from '../../atoms/Modal/index';

const duration = 300;

interface Props {
  menuIsOpen: boolean;
}

const SideMenu = ({ menuIsOpen }: Props) => {
  const authState = useSelector(({ authState }: IRootState) => authState);
  return (
    <CSSTransition
      in={menuIsOpen}
      className="modal-transition"
      classNames="modal-transition"
      unmountOnExit
      timeout={duration}
    >
      <ModalWithTransitionStyles zIndex={1000}>
        <MenuContainer>
          {!authState.isLoggedIn && (
            <>
              <Link to={'/register'}>Register</Link>
              <Link to={'/login'}>Login</Link>
            </>
          )}
          {authState.isLoggedIn && (
            <>
              <Link to={'/logout'}>Logout</Link>
            </>
          )}
        </MenuContainer>
      </ModalWithTransitionStyles>
    </CSSTransition>
  );
};

const ModalWithTransitionStyles = styled(Modal)`
  &.modal-transition-enter {
    transform: translateX(-100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateX(0);
  }
  &.modal-transition-exit {
    transform: translateX(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateX(-100%);
  }
`;

const MenuContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.base.white};
  display: grid;
  grid-auto-rows: 64px;
  align-items: center;
`;

export default SideMenu;
