import React from 'react';
import { Tr, Td } from "@chakra-ui/react";

import './styles.css';

export default function StudentReport({dataKey, name, email, confirmationCode, check, ...props}){
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{confirmationCode}</Td>
      <Td>{check}</Td>
    </Tr>
  );
}
