import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CommonLayout from '../components/CommonLayout/index';
import SearchBar from '../components/molecules/SearchBar';
import Map from '../components/organisms/Map';
import StudyForm from '../components/organisms/StudyForm';
import useGoogleMap from '../hooks/useGoogleMap';
import { createStudy } from '../store/actions/v1/study.action';
import { IRootState } from '../store/reducers/index';

export interface IValues {
  category: string;
  title: string;
  description: string;
  thumbnail: string;
}

interface Props {}

const CreateStudy = (props: Props) => {
  const dispatch = useDispatch();
  const authState = useSelector((state: IRootState) => state.authState);
  const history = useHistory();

  const {
    bootstrapURLKeys,
    searchAddress,
    geoInfo,
    handleDragEnd,
    handleSearchBarChange,
    handleSearchBarSubmit,
  } = useGoogleMap();

  const handleSubmitForm = useCallback(
    (values: IValues) => {
      dispatch(createStudy({ ...geoInfo, ...values, user: authState.user?._id }, history));
    },
    [history, geoInfo, dispatch, authState.user],
  );

  return (
    <CommonLayout noFooter>
      <SearchBar
        searchAddress={searchAddress}
        handleSearchBarChange={handleSearchBarChange}
        handleSearchBarSubmit={handleSearchBarSubmit}
      />
      <Map bootstrapURLKeys={bootstrapURLKeys} geoInfo={geoInfo} handleDragEnd={handleDragEnd} />
      <StudyForm handleSubmit={handleSubmitForm} />
    </CommonLayout>
  );
};

export default CreateStudy;
