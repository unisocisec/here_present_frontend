
import React from 'react';
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react"
import trademark from '../../images/trademark.png';

import './styles.css';
// import avatar from '../../images/avatar.svg';

function TemplatePage({ history, ...props }) {
  const { acitiveButton, nameButton, acitiveUser, children, onClick } = props || {};
  const teacherName = localStorage.getItem('teacherName')
  async function logOff() {
    localStorage.clear();
    history.push('/');
  }
  async function backButton() {
    history.goBack()
  }
  return (
    <div className="conteiner">
      <div className="logoTopBar">
        <img id="trademark" src={trademark} alt="trademark" />
      </div>
      <div className="components">
        <Button colorScheme="teal" mt={3} size="lg" onClick={() => { backButton() }}>
          Voltar
        </Button>
        {acitiveButton && (
          <Button colorScheme="teal" mt={3} id="buttonMain" size="lg" onClick={() => onClick()} >{nameButton}</Button>
        )}
        {acitiveUser && (
          <div className="avatar">
            <Menu mt={4}>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'}>
                <Avatar name={teacherName} />
              </MenuButton>
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

export default TemplatePage;