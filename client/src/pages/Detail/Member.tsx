import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import styled from 'styled-components';
import useSetDefaultImage from '../../hooks/useSetDefaultImage';
import { IParticipant, IStudy } from '../../store/store-types';

interface Props {
  master: IStudy['user']['_id'];
  members: IParticipant[];
}

const Member = ({ master, members }: Props) => {
  const { setDefaultImageFn } = useSetDefaultImage();
  console.log(members);
  return (
    <Wrapper>
      {members.map((member) => (
        <Item key={member._id}>
          <Avatar>
            <img
              src={member.avatar ?? 'https://t1.daumcdn.net/cfile/tistory/2122B33357320AEB30'}
              alt="avatar"
              onError={(e: any) => setDefaultImageFn(e, 'avatar')}
            />
          </Avatar>
          <InfoBox>
            <Name>
              <PersonIcon fontSize={'large'} />
              <span>{member.username}</span>
              {master === member._id && <strong>MASTER</strong>}
            </Name>
            <Email>
              <MailIcon fontSize={'large'} />
              <span>{member.email}</span>
            </Email>
          </InfoBox>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Member;

const Wrapper = styled.section`
  display: grid;
  grid-gap: 16px;
  margin-top: 32px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const InfoBox = styled.div`
  width: calc(100% - 96px);
  word-break: break-all;
`;
const Name = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  span {
    font-size: 20px;
    font-weight: 800;
    margin-left: 8px;
  }
  strong {
    font-size: 2px;
    font-weight: 400;
    color: red;
    margin-left: 8px;
    border: 1px solid red;
    box-sizing: border-box;
    padding: 4px 6px;
  }
`;
const Email = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
  }
`;
