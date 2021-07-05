import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useToast } from "@chakra-ui/react"
import imageBackgroud from '../images/image_backgroud.png';
import check from '../images/check.png';
import Topbar from "../components/TopBar";
import InputPassword from "../components/InputPassword"
import InputText from "../components/InputText";
import PrimaryButton from "../components/PrimaryButton";
import api from "../services/api";

import '../styles/pages/login.css';

function Login({ history }) {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const toast = useToast()

  async function setLogin(){
    api.post("/auth/sign_in", { email: email, password: password }).then(response => {
      localStorage.setItem('token', response.headers.authorization);
      localStorage.setItem('teacherId', response.data.id);
      localStorage.setItem('teacherName', response.data.first_name + " " + response.data.last_name);
      toast({
        title: "Login com sucesso",
        description: "Seu login foi efetuado com sucesso.",
        position: "bottom-right",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
      history.push('/ClassesBoard');
    }).catch(err => {
      toast({
        title: "Falha no login",
        description: "Email ou senha estão inválidos.",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    })
  }
  return (
    <div id="pageLogin">
      <Topbar />
      <div className="contentLoginPage">
        <div className="contentWrapper">
          <img id="imageBackgroud" src={imageBackgroud} alt="Background"/>
          <main id="containerLoginText">
            <div className="sloganLabel">
              <h1>Evoluindo o seu modo de fazer chamada</h1>
            </div>
            <div className="versatileLabel">
              <h3>Versátil</h3>
              <img src={check} alt="Background"/>
            </div>
            <div className="fastLabel">
              <h3>Rápido</h3>
              <img src={check} alt="Background"/>
            </div>
            <div className="accessibleLabel">
              <h3>Acessível</h3>
              <img src={check} alt="Background"/>
            </div>
          </main>
        </div>

        <div id="sidebar">
          <div className="loginLabel">
            <h1>LOGIN</h1>
          </div>
          <div className="emailContainer">
            <h3>E-mail</h3>
            <InputText id="inputEmail" placeholder="Insira o seu email" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="passwordContainer">
            <h3>Senha</h3>
            <InputPassword id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="resetPasswordContainer">
            <a href="/" id="resetPassword">Recuperar senha</a>
            <i></i>
          </div>
          <div className="loginButton">
            <PrimaryButton type="button" id="loginButton" onClick={() => setLogin()}>Login</PrimaryButton>
          </div>
          <div className="newRegisterButton">
            <Link to="/signup">
              <PrimaryButton type="button" id="newRegister">
                Novo Aqui?
                <br></br>
                Crie sua conta
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
