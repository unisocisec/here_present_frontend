import React from 'react';
import './styles.css';
import { Input } from "@chakra-ui/react"


export default function inputText({ ...props }) {
  return (
    <Input type="text" className="inputText" {...props}/>
  );
}