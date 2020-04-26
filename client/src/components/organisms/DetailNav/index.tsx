import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IRootState } from '../../../store/reducers/index';

interface Props {
  currentStudyId: string;
}

const DetailNav = ({ currentStudyId }: Props) => {
  const location = useLocation();

  const studyTodoState = useSelector(({ studyTodoState }: IRootState) => studyTodoState);
  const studyState = useSelector(({ studyState }: IRootState) => studyState);
  return (
    <NavWrapper>
      <NavList>
        <CustomLink
          to={`/study/${currentStudyId}/detail`}
          className={location.pathname.includes('/detail') ? 'nav__link-active' : ''}
        >
          Info
        </CustomLink>
      </NavList>
      <NavList>
        <CustomLink
          to={`/study/${currentStudyId}/todo`}
          className={
            location.pathname.includes('/todo') || location.pathname.includes('/todo')
              ? 'nav__link-active'
              : ''
          }
        >
          Todo ({studyTodoState.todos.length})
        </CustomLink>
      </NavList>
      <NavList>
        <CustomLink
          to={`/study/${currentStudyId}/member`}
          className={location.pathname.includes('/member') ? 'nav__link-active' : ''}
        >
          Member ({studyState.study.participants.length})
        </CustomLink>
      </NavList>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background-color: red; */
`;

const NavList = styled.li`
  justify-self: center;
  list-style: none;
`;

const CustomLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  font-family: 'Share', cursive;
  font-size: 1.1rem;
  box-sizing: border-box;
  ${(props) =>
    css`
      color: ${props.theme.colors.text.darkSecondary};
      padding: ${props.theme.space}px 0;
    `}

  &.nav__link-active {
    color: ${(props) => props.theme.colors.base.black};
    box-sizing: border-box;
    border-bottom: 1px solid ${(props) => props.theme.colors.base.black};
  }
`;

export default DetailNav;
