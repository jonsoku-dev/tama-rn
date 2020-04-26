import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import validate from './formValidator';
import { IValues } from '../../../pages/CreateStudy';
import StudyCategories from '../../molecules/StudyCategories';

export interface IFormik {
  title: string;
  description: string;
  thumbnail: string;
}

interface Props {
  handleSubmit: (values: IValues) => void;
}

const StudyFormContainer = ({ handleSubmit }: Props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChangeCategory = (option: string) => {
    setSelectedOption(option);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      thumbnail: '',
    },
    validate,
    onSubmit: (values) => {
      handleSubmit({
        ...values,
        category: selectedOption,
      });
    },
  });

  return (
    <Wrapper>
      <Form onSubmit={formik.handleSubmit}>
        <StudyCategories onChange={handleChangeCategory} />
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="타이틀을 입력해주세요. "
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <ErrorMsg>{formik.errors.title}</ErrorMsg> : null}
        <TextArea
          id="description"
          name="description"
          placeholder="본문을 입력해주세요. "
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description ? <ErrorMsg>{formik.errors.description}</ErrorMsg> : null}
        <Input
          type="text"
          id="thumbnail"
          name="thumbnail"
          placeholder="썸네일주소를 입력해주세요. "
          onChange={formik.handleChange}
          value={formik.values.thumbnail}
        />
        {formik.errors.thumbnail ? <ErrorMsg>{formik.errors.thumbnail}</ErrorMsg> : null}
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default StudyFormContainer;

const Wrapper = styled('div')`
  margin-bottom: calc(50px + ${(props) => props.theme.space * 4}px);
`;

const Form = styled('form')`
  display: grid;
`;

const Input = styled('input')`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0 8px;
  border-bottom: 2px solid #eeeeee;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;

const TextArea = styled('textarea')`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0 8px;
  border-bottom: 2px solid #eeeeee;
  outline: none;
  height: 240px;
  overflow: auto;
  line-height: 1.5;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;

const Button = styled('button')`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  box-sizing: border-box;
  padding: 16px 0;
  margin-top: 16px;
`;

const ErrorMsg = styled('p')`
  color: red;
  margin: 8px 0;
`;
