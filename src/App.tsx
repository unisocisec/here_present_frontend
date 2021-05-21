import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"

import 'react-calendar/dist/Calendar.css';
import './styles/global.css';


import Route from './config/routes';

function App() {
  return (
    <ChakraProvider>
      <Route />
    </ChakraProvider>
  );
}

export default App;