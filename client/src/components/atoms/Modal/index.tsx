import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface IProps {
  zIndex: number;
  className?: string;
}

const Modal: FC<IProps> = ({ zIndex, className, children }) => {
  return ReactDOM.createPortal(
    <ModalWrapper className={className} zIndex={zIndex}>
      {children}
    </ModalWrapper>,
    document.body,
  );
};

const ModalWrapper = styled.div<{ zIndex: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: inherit;
  height: 100%;
  z-index: ${(props) => props.zIndex};
`;

export default Modal;
