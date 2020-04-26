import BeenhereIcon from '@material-ui/icons/Beenhere';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import styled from 'styled-components';

interface Props {
  bootstrapURLKeys: any;
  handleDragEnd?: any;
  geoInfo: {
    lat: number;
    lng: number;
    address: string;
  };
  height?: string;
  isDetail?: boolean;
}

const Map = ({
  bootstrapURLKeys,
  geoInfo,
  handleDragEnd,
  height = '40vh',
  isDetail = false,
}: Props) => {
  if (geoInfo.lat === 0 || geoInfo.lng === 0) return <div> Loading ...</div>;
  return (
    <>
      <Wrapper height={height}>
        <MapWrapper>
          <GoogleMapReact
            bootstrapURLKeys={bootstrapURLKeys}
            center={{ lat: geoInfo.lat, lng: geoInfo.lng }}
            defaultZoom={16}
            onDragEnd={handleDragEnd}
          >
            {isDetail && <Marker lat={geoInfo.lat} lng={geoInfo.lng} />}
          </GoogleMapReact>
          <Center>+</Center>
        </MapWrapper>
      </Wrapper>
      {!isDetail && (
        <Address>
          <h4>Current Location</h4>
          <p>{geoInfo.address}</p>
        </Address>
      )}
    </>
  );
};

export default Map;

const Marker = (props: { lat: number; lng: number }) => {
  return <BeenhereIcon fontSize={'large'} color={'action'} />;
};

const Wrapper = styled.section<{ height: string }>`
  height: ${(props) => props.height};
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const Address = styled.div`
  margin-top: 16px;
  width: 100%;
  text-align: center;
`;
