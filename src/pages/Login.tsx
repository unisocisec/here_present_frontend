/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// import { FiArrowRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

import trademark from '../images/trademark.png';
import imageBackgroud from '../images/image_backgroud.png';
import check from '../images/check.png';

import '../styles/pages/login.css';

function Login() {
  return (
    <div id="pageLogin">
      <div className="topBar">
        <img id="trademark" src={trademark} alt="trademark" />
      </div>
      <div className="contentLoginPage">

        <div className="contentWrapper">
          <img id="imageBackgroud" src={imageBackgroud} alt="Background" />
          <main id="containerLoginText">
            <div className="sloganLabel">
              <h1>Evoluindo o seu modo de fazer chamada</h1>
            </div>
            <div className="versatileLabel">
              <h3>Versátil</h3>
              <img src={check} alt="Background" />
            </div>
            <div className="fastLabel">
              <h3>Rápido</h3>
              <img src={check} alt="Background" />
            </div>
            <div className="accessibleLabel">
              <h3>Acessível</h3>
              <img src={check} alt="Background" />
            </div>
          </main>
        </div>

        <div id="sidebar">
          <div className="loginLabel">
            <h1>LOGIN</h1>
          </div>
          <div className="emailContainer">
            <h3>E-mail</h3>
            <input id="inputEmail" type="text" placeholder="Insira o seu email" />
          </div>
          <div className="passwordContainer">
            <h3>Senha</h3>
            <input id="inputPassword" type="password" placeholder="Insira a sua senha" />
          </div>
          <div className="resetPasswordContainer">
            <a href="" id="resetPassword">Recuperar senha</a>
            <i />
          </div>
          <div className="loginButton">
            <button id="login" type="submit">Login</button>
          </div>
          <div className="newRegisterButton">
            <button id="newRegister" type="submit">
              Novo Aqui?
              <br />
              Crie sua conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
