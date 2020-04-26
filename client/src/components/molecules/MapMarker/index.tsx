import ClearIcon from '@material-ui/icons/Clear';
import WhereToVoteIcon from '@material-ui/icons/WhereToVote';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { joinStudy } from '../../../store/actions/v1/study.action';
import { IRootState } from '../../../store/reducers/index';
import { IStudy, IStudyState } from '../../../store/store-types';

interface Props extends IStudy {
  loading: IStudyState['loading'];
}

const MapMarker = ({
  loading: loadingJoin,
  _id,
  address,
  category,
  comments,
  createdAt,
  description,
  lat,
  likes,
  lng,
  maxParticipants,
  minParticipants,
  participants,
  thumbnail,
  title,
  todos,
  updatedAt,
  user,
  view,
}: Props) => {
  const authState = useSelector(({ authState }: IRootState) => authState);
  const [isJoined, setIsJoined] = useState(
    !!participants.find((pt) => pt._id === authState.user?._id),
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const onClickMark = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShow((prevState) => !prevState);
  }, []);

  const onClickInfoBox = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const onClickClear = useCallback((event: React.MouseEvent<HTMLParagraphElement>) => {
    event.stopPropagation();
    setShow((prevState) => !prevState);
  }, []);

  const onClickDetail = useCallback(
    (event: React.MouseEvent<HTMLParagraphElement>) => {
      event.stopPropagation();
      history.push(`/study/${_id}/detail`);
    },
    [history, _id],
  );

  const onClickJoinStudy = useCallback(() => {
    setIsJoined((prevState) => !prevState);
    dispatch(joinStudy(_id));
  }, [dispatch, _id]);

  return (
    <Wrapper>
      {show ? (
        <InfoBox onClick={onClickInfoBox}>
          <ClearIconBox onClick={onClickClear}>
            <ClearIcon />
          </ClearIconBox>
          <Category>
            <p>{category && category.name}</p>
          </Category>
          <Title>{title}</Title>
          <DetailButtonBox onClick={onClickDetail}>
            <span>세부페이지로</span>
          </DetailButtonBox>
          <JoinButtonBox onClick={onClickJoinStudy} isJoined={isJoined}>
            {loadingJoin ? (
              `loading`
            ) : (
              <>
                <span>{isJoined ? '참가완료' : '참가하기'}</span>
                <span>
                  ( {participants.length} / {maxParticipants} )
                </span>
              </>
            )}
          </JoinButtonBox>
        </InfoBox>
      ) : (
        <IconBox onClick={onClickMark}>
          <WhereToVoteIcon fontSize={'large'} color={isJoined ? 'action' : 'error'} />
        </IconBox>
      )}
    </Wrapper>
  );
};

export default MapMarker;

const Wrapper = styled.div`
  cursor: initial;
  * {
    padding: 0;
    margin: 0;
  }
`;

const InfoBox = styled.div`
  z-index: 1000000;
  width: 160px;
  height: 110px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 4px;
  box-sizing: border-box;
  padding: ${(props) => props.theme.space}px;
  position: relative;
`;

const ClearIconBox = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  align-self: flex-end;
  cursor: pointer;
`;

const Category = styled.div`
  display: inline-block;
  width: 80%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* 여러 줄 자르기 추가 스타일 */
  white-space: normal;
  text-align: center;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 4px;
  margin-bottom: auto;

  display: inline-block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 여러 줄 자르기 추가 스타일 */
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const DefaultButtonBox = styled.p`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.theme.colors.base.white};
  box-sizing: border-box;
  padding: ${(props) => `${props.theme.space / 2}px ${props.theme.space}px`};
  width: 100%;
  background-color: ${(props) => props.theme.colors.base.black};
  margin-top: 2px;
`;

const DetailButtonBox = styled(DefaultButtonBox)``;

const JoinButtonBox = styled(DefaultButtonBox)<{ isJoined: boolean }>`
  ${(props) =>
    props.isJoined
      ? `
      cursor: not-allowed;
      pointer-events: none;
      background-color: ${props.theme.colors.base.grey};
      `
      : `
      cursor: pointer;
      background-color: ${props.theme.colors.base.black}
      `}
`;

const IconBox = styled.div`
  cursor: pointer;
`;
