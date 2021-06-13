import React from 'react';
import './styles.css';
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

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
      <InputRightElement width="11rem" height="4.5rem">
        <Button onClick={() => handleClick()}>
          {show ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}