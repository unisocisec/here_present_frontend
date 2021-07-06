import React from 'react';
import { Tr, Td } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import './styles.css';

export default function StudentReport({dataKey, name, email, confirmationCode, check, ...props}){
  return (
    <Tr key={`table_body_${dataKey}`}>
      <Td key={`name_${dataKey}`}>{name}</Td>
      <Td key={`email_${dataKey}`}>{email}</Td>
      <Td key={`confirmationCode_${dataKey}`}>{confirmationCode}</Td>
      <Td key={`check_${dataKey}`}>{check ? <Icon as={CheckIcon} color="green"/> : <Icon as={CloseIcon} color="red"/>}</Td>
    </Tr>
  );
}
