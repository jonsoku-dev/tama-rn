import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GOOGLE_MAP_KEY } from '../keys';
import { geoCode, reverseGeoCode } from '../utils/mapHelpers';

export default () => {
  const bootstrapURLKeys = {
    key: GOOGLE_MAP_KEY,
    language: 'kr',
  };

  const [searchAddress, setSearchAddress] = useState('');

  const [geoInfo, setGeoInfo] = useState({
    lat: 0,
    lng: 0,
    address: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);

  const handleGeoSuccess = async (data: any) => {
    await setGeoInfo({
      lat: data.coords.latitude,
      lng: data.coords.longitude,
      address: await reverseGeoCode(data.coords.latitude, data.coords.longitude),
    });
  };

  const handleGeoError = async (data: any) => {
    console.log(`Error: ${data}`);
  };

  const handleDragEnd = async (data: any) => {
    const address = await reverseGeoCode(data.center.lat(), data.center.lng());
    setGeoInfo({
      lat: data.center.lat(),
      lng: data.center.lng(),
      address,
    });
  };

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchAddress(e.target.value);
  };

  const handleSearchBarSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      if (e.key === 'Enter') {
        e.preventDefault();
        const response: any = await geoCode(searchAddress);
        setGeoInfo({
          lat: response.lat,
          lng: response.lng,
          address: await reverseGeoCode(response.lat, response.lng),
        });
        setSearchAddress('');
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const setLocationInfo = useCallback(async () => {
    if (geoInfo.lat !== 0 || geoInfo.lng !== 0) {
      const address = await reverseGeoCode(geoInfo.lat, geoInfo.lng);
      setGeoInfo((prevState) => ({
        ...prevState,
        lat: geoInfo.lat,
        lng: geoInfo.lng,
        address,
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocationInfo();
  }, [setLocationInfo]);

  return {
    bootstrapURLKeys,
    searchAddress,
    geoInfo,
    handleSearchBarChange,
    handleDragEnd,
    handleSearchBarSubmit,
  };
};
