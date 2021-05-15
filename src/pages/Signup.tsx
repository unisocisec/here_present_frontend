import React from 'react';


import Topbar from "../components/TopBar";
import InputPassword from "../components/InputPassword"
import InputText from "../components/InputText";
import PrimaryButton from "../components/PrimaryButton";

import '../styles/pages/signup.css';

function Signup() {
  return (
    <div id="pageSignup">
      <Topbar />
      <div className="contentSignupPage">
        <div id="sidebar">
          <div className="signupLabel">
            <h1>CADASTRO</h1>
          </div>
          <div className="containerStyle">
            <div className="emailContainer">
              <h3>E-mail</h3>
              <InputText id="inputEmail" placeholder="Insira o seu email"/>
            </div>
            <div className="nameContainer">
              <h3>Nome</h3>
              <InputText id="inputName" placeholder="Insira o seu nome"/>
            </div>
            <div className="passwordContainer">
              <h3>Senha</h3>
              <InputPassword id="inputPassword"></InputPassword>
            </div>
          </div>
          <div className="signupButton">
            <PrimaryButton type="button" id="signupButton">Cadastrar</PrimaryButton>
          </div>
        </div>
        <div className="SloganSignup">
          <h1>
            BEM VINDA(O) A INOVAÇÃO
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Signup;
