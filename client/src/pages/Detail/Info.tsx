import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SmallSpinner from '../../components/atoms/SmallSpinner/index';
import Spinner from '../../components/atoms/Spinner/index';
import Map from '../../components/organisms/Map';
import useGoogleMap from '../../hooks/useGoogleMap';
import {
  joinStudy,
  likeStudy,
  quitStudy,
  unlikeStudy
  } from '../../store/actions/v1/study.action';
import { IRootState } from '../../store/reducers/index';
import { mediaQueries } from '../../styles/mediaQuery';

interface Props {
  onClickLoginPage: () => void;
}

const Info = ({ onClickLoginPage }: Props) => {
  const { loading, likeLoading, study } = useSelector(({ studyState }: IRootState) => studyState);
  const authState = useSelector(({ authState }: IRootState) => authState);
  const dispatch = useDispatch();
  const { bootstrapURLKeys } = useGoogleMap();

  const onClickJoinStudy = useCallback(() => {
    dispatch(joinStudy(study._id));
  }, [dispatch, study._id]);

  const onClickQuitStudy = useCallback(() => {
    dispatch(quitStudy(study._id));
  }, [dispatch, study._id]);

  const onClickLikeStudy = useCallback(() => {
    dispatch(likeStudy(study._id));
  }, [dispatch, study._id]);

  const onClickUnlikeStudy = useCallback(() => {
    dispatch(unlikeStudy(study._id));
  }, [dispatch, study._id]);

  if (loading) return <Spinner />;

  return (
    <Wrapper>
      <Content>
        <Map
          bootstrapURLKeys={bootstrapURLKeys}
          geoInfo={{
            address: study.address,
            lat: study.lat,
            lng: study.lng,
          }}
          height={'100%'}
          isDetail
        />
        <InfoBox>
          <BoardInfo>
            <div>
              <h2>Author</h2>
              <p>{study.user.username}</p>
            </div>
            <div>
              <h2>CREATED AT</h2>
              <p>{moment(study.createdAt).fromNow()}</p>
            </div>
            <div>
              <h2>View</h2>
              <p>{study.view}</p>
            </div>
            <Participant>
              <h2>참가 현황</h2>
              <p>{`${study.participants.length} / ${study.maxParticipants}`}</p>
            </Participant>
          </BoardInfo>
          <Category>
            <h2>CATEGORY</h2>
            <p>{study.category.name}</p>
          </Category>
          <Location>
            <h2>Location</h2>
            <p>{study.address}</p>
          </Location>
          <Title>
            <h2>TITLE</h2>
            <p>{study.title}</p>
          </Title>
          <Description>
            <h2>DESCRIPTION</h2>
            <p>{study.description}</p>
          </Description>
          {authState.isLoggedIn &&
            !!!study.participants.find((pt) => pt._id === authState.user?._id) && (
              <JoinButton>
                <button onClick={onClickJoinStudy}>참가하기</button>
              </JoinButton>
            )}
          {authState.isLoggedIn &&
            !!study.participants.find((pt) => pt._id === authState.user?._id) && (
              <JoinButton>
                <button onClick={onClickQuitStudy}>탈퇴하기</button>
              </JoinButton>
            )}
          {!authState.isLoggedIn && (
            <JoinButton>
              <button onClick={onClickLoginPage}>참석하기</button>
            </JoinButton>
          )}
        </InfoBox>
      </Content>
      <LikeBox>
        <div onClick={onClickLikeStudy}>
          <ThumbUpAltIcon fontSize={'large'} />
          <p>좋아요</p>
        </div>
        <div>{likeLoading ? <SmallSpinner /> : study.likes.length}</div>
        <div onClick={onClickUnlikeStudy}>
          <ThumbDownIcon fontSize={'large'} />
          <p>싫어요</p>
        </div>
      </LikeBox>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  margin-top: 32px;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: 400px 1fr;
  ${mediaQueries('tablet')`
   grid-template-columns: repeat(2, 1fr);
  `}
  grid-gap: 24px;
`;

const InfoBox = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 16px;
  * {
    word-wrap: break-word;
  }
`;

const Category = styled.div``;
const Location = styled.div``;
const Title = styled.div``;
const BoardInfo = styled.div`
  display: flex;
  justify-content: space-around;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Description = styled.div`
  margin-bottom: auto;
`;
const Participant = styled.div``;
const JoinButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    display: flex;
    background-color: black;
    color: white;
    width: 60%;
    padding: 16px;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }
`;

const LikeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  > div:not(:nth-of-type(2)) {
    box-sizing: border-box;
    padding: 8px;
    margin: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
  > div:nth-of-type(2) {
    box-sizing: border-box;
    margin: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;
