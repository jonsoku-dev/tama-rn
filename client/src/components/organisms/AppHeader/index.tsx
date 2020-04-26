import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import DefaultUserIcon from '../../../assets/icons/user.svg';
import { IRootState } from '../../../store/reducers/index';
import Icon from '../../atoms/Icon';
import BackDrop from '../../molecules/BackDrop/index';
import SideMenu from '../../molecules/SideMenu/index';

interface IProps extends RouteComponentProps<any> {}

const LoggedInIcon = 'https://t1.daumcdn.net/cfile/tistory/2122B33357320AEB30';

const AppHeader = ({ history }: IProps) => {
  // side navigation controller
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleMenu = () => {
    setMenuIsOpen((status: boolean) => !status);
  };
  // start
  const authState = useSelector((state: IRootState) => state.authState);
  return (
    <>
      <HeaderWrapper>
        <UserIcon
          isLoggedIn={authState.isLoggedIn}
          src={authState.isLoggedIn ? LoggedInIcon : DefaultUserIcon}
          size={authState.isLoggedIn ? 24 : 22}
          onClick={handleMenu}
        />
        <Title onClick={() => history.push('/')}>TAMASTUDY</Title>
      </HeaderWrapper>
      <BackDrop menuIsOpen={menuIsOpen} onClose={handleMenu} />
      <SideMenu menuIsOpen={menuIsOpen} />
    </>
  );
};

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const UserIcon = styled(Icon)<{ isLoggedIn: boolean }>`
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 50%;
  padding: 2px;
  ${(props) => css`
    ${!props.isLoggedIn && `border: 1px solid ${props.theme.colors.base.black}`};
  `}
`;

const Title = styled.div`
  font-family: 'Share', cursive;
  justify-self: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
`;

export default withRouter(AppHeader);
