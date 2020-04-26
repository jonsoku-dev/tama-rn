import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { StylesConfig } from 'react-select';
import { getCategories } from '../../../store/actions/v1/study.action';
import { IRootState } from '../../../store/reducers/index';

interface IProps {
  onChange: (option: string) => void;
}

export default ({ onChange }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const studyState = useSelector(({ studyState }: IRootState) => studyState);

  const handleChange = useCallback(
    (newValue: any) => {
      if (newValue.value) {
        onChange(newValue.value);
      } else {
        return false;
      }
    },
    [onChange],
  );

  return (
    <Select
      styles={customStyles}
      isLoading={studyState.loading}
      isSearchable
      options={studyState.categories.map((category) => ({
        label: category.name,
        value: category._id,
      }))}
      onChange={handleChange}
    />
  );
};

const customStyles: StylesConfig = {
  container: (provided, state) => {
    return {
      ...provided,
      marginTop: '16px',
    };
  },
  control: (provided, state) => {
    return {
      ...provided,
      borderColor: state.isFocused ? '#000' : 'hsl(0,0%,80%)',
      boxShadow: state.isFocused ? '1px solid #000' : 'hsl(0,0%,80%)',
      '&:hover': {
        borderColor: state.isFocused && '#000',
      },
    };
  },
  menu: (provided, state) => {
    return {
      ...provided,
    };
  },
  option: (provided, state) => {
    return {
      ...provided,
    };
  },
};
