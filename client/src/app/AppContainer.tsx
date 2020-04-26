import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import AppPresenter from './AppPresenter';
import { loadUserFn } from '../store/actions/v1/auth.action';
import theme from '../styles/theme';

interface Props {}

const AppContainer = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserFn());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <AppPresenter />
      <ToastContainer position={'bottom-center'} autoClose={1500} />
    </ThemeProvider>
  );
};

export default AppContainer;
