import GoogleMapReact from 'google-map-react';
import React from 'react';
import styled from 'styled-components';
import useGoogleMap from '../../../hooks/useGoogleMap';
import { IStudyState } from '../../../store/store-types';
import MapMarker from '../../molecules/MapMarker/';
import SearchBar from '../../molecules/SearchBar';

interface Props {
  studies: IStudyState['studies'];
  loading: IStudyState['loading'];
}

const GoogleMap = ({ studies, loading }: Props) => {
  const {
    bootstrapURLKeys,
    geoInfo,
    handleDragEnd,
    handleSearchBarChange,
    handleSearchBarSubmit,
    searchAddress,
  } = useGoogleMap();
  return (
    <Wrapper>
      <SearchBar
        handleSearchBarChange={handleSearchBarChange}
        handleSearchBarSubmit={handleSearchBarSubmit}
        searchAddress={searchAddress}
      />
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={bootstrapURLKeys}
          center={{ lat: geoInfo.lat, lng: geoInfo.lng }}
          defaultZoom={15}
          onDragEnd={handleDragEnd}
        >
          {studies.map((st) => (
            <MapMarker key={st._id} loading={loading} {...st} />
          ))}
        </GoogleMapReact>
        <Center>+</Center>
      </MapWrapper>
    </Wrapper>
  );
};

export default GoogleMap;

const Wrapper = styled.section`
  margin-top: 16px;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 8px;
  height: 8px;
`;
