import React from 'react';
import styled from 'styled-components';

interface Props {
  searchAddress: string;
  handleSearchBarChange: any;
  handleSearchBarSubmit: any;
}

const SearchBar = ({ searchAddress, handleSearchBarChange, handleSearchBarSubmit }: Props) => {
  return (
    <div>
      <Input
        type={'text'}
        value={searchAddress}
        placeholder={'Search Google Maps ...'}
        onChange={handleSearchBarChange}
        onKeyPress={handleSearchBarSubmit}
      />
    </div>
  );
};

export default SearchBar;

const Input = styled.input`
  box-sizing: border-box;
  padding: 8px;
  margin: 8px 0;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  width: 100%;
`;
