
import React from 'react';
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react"


import '../../styles/components/templatePage.css';
import trademark from '../../images/trademark.png';


function templatePage({ history, ...props }) {
  const { acitiveButton, nameButton, acitiveUser, children } = props || {};

  console.log(history)

  async function logOff() {
    console.log("aqui")
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="conteiner">
      <div className="logoTopBar">
        <img id="trademark" src={trademark} alt="trademark" />
      </div>
      <div className="components">
        {acitiveButton && (
          <Button colorScheme="teal" id="buttonMain" size="lg">{nameButton}</Button>
        )}
        {acitiveUser && (
          <div className="avatar">
            <Menu>
              <MenuButton as={Avatar} />
              <MenuList>
                <MenuItem onClick={() => logOff()} >Sair</MenuItem>
              </MenuList>
            </Menu>
          </div>
        )}
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default templatePage;
