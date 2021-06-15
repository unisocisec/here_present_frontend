import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './styles/customTheme';
import 'react-calendar/dist/Calendar.css';
import './styles/global.css';
import Route from './config/routes';

function App() {
  return (
    <ChakraProvider theme={customTheme} >
      <Route />
    </ChakraProvider>
  );
}

export default App;