
import React from 'react';
import {Button} from "@chakra-ui/react";

import '../../styles/components/templatePage.css';
import trademark from '../../images/trademark.png';
import avatar from '../../images/avatar.svg';


export default class templatePage extends React.Component{

  // constructor(props) {
  //   super(props);
  // }

  render(){
    const { acitiveButton, nameButton, acitiveUser } = this.props;

    return (
      <div className="conteiner">
        <div className="logoTopBar">
          <img id="trademark" src={trademark} alt="trademark" />
        </div>
        <div className="components">
          {acitiveButton && (
            <Button colorScheme="teal"  id="buttonMain" size="lg">{nameButton}</Button>
          )}
          {acitiveUser && (
            <img id="avatar" src={avatar} alt="avatar" />
          )}
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}






