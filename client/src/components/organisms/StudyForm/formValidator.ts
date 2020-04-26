import { IFormik } from './StudyFormContainer';

export default (values: IFormik) => {
  const errors = {} as IFormik;
  if (!values.title) {
    errors.title = '필수 입력사항입니다. ';
  }
  if (!values.description) {
    errors.description = '필수 입력사항입니다. ';
  }
  if (!values.thumbnail) {
    errors.thumbnail = '필수 입력사항입니다. ';
  } else if (
    !/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i.test(
      values.thumbnail,
    )
  ) {
    errors.thumbnail = 'http 혹은 https로 시작되는 주소를 입력해주세요. ';
  }
  return errors;
};
