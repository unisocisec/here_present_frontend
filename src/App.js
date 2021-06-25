import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { customTheme } from './styles/customTheme';
import Route from './config/routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-calendar/dist/Calendar.css';
import './styles/global.css';

function App() {
  return (
    <ChakraProvider theme={customTheme} >
      <Route />
    </ChakraProvider>
  );
}

export default App;