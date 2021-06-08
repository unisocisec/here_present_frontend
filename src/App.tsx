import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './styles/customTheme';

import store from  './config/store'

import 'react-calendar/dist/Calendar.css';
import './styles/global.css';

import Route from './config/routes';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme} >
        <Route />
      </ChakraProvider>
    </Provider>
  );
}

export default App;