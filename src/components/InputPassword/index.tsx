// nao usar descontinuado

import React from 'react';
import './styles.css';
import { Input, InputGroup, Button } from "@chakra-ui/react"
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export default function PasswordInput({ ...props }) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      <Input
        type={show ? "text" : "password"}
        className="inputPassword"
        placeholder="Insira a sua senha"
        {...props}
      />
      <Button onClick={handleClick}>
        {show ? <Visibility /> : <VisibilityOff />}
      </Button>
    </InputGroup>
  )
}