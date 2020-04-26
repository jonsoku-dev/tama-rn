import { useCallback, useState } from 'react';
import DefaultAvatarIcon from '../assets/icons/user.svg';
// import DefaultImage from '../assets/icons/error.svg';

const useSetDefaultImage = () => {
  const [imgLoadError, setImgLoadError] = useState<boolean>(false);
  const setDefaultImageFn = useCallback(
    (event: React.BaseSyntheticEvent<HTMLImageElement, Event>, variant: 'avatar' | 'image') => {
      if (variant === 'avatar') {
        setImgLoadError(true);
        event.target.src = DefaultAvatarIcon;
      } else if (variant === 'image') {
        setImgLoadError(true);
        event.target.src = 'https://nijisanji.net/wp-content/themes/nijisanji/images/dummy.png';
      } else {
        return;
      }
    },
    [],
  );

  return {
    setDefaultImageFn,
    imgLoadError,
  };
};

export default useSetDefaultImage;
