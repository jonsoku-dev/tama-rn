import React, { useCallback } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';
import { ReactComponent as BackIcon } from '../../../assets/icons/back.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
// import { useBeforeunload } from 'react-beforeunload';
interface Props extends RouteComponentProps<any> {}

const AppNavButton = ({ history }: Props) => {
  // useBeforeunload((event) => event.preventDefault()); // Todo

  const onClickGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onClickHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Wrapper>
      <Back onClick={onClickGoBack} />
      <Home onClick={onClickHome} />
      <Menu onClick={() => {}} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Buttons = css`
  fill: ${(props) => props.theme.colors.base.white};
  cursor: pointer;
`;

const Back = styled(BackIcon)`
  ${Buttons}
`;

const Home = styled(HomeIcon)`
  ${Buttons}
`;

const Menu = styled(MenuIcon)`
  ${Buttons}
`;

export default withRouter(AppNavButton);
