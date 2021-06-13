import React, { useState } from 'react';
import { useToast } from "@chakra-ui/react"
import Topbar from "../components/TopBar";
import InputPassword from "../components/InputPassword"
import InputText from "../components/InputText";
import PrimaryButton from "../components/PrimaryButton";
import api from "../services/api";

import '../styles/pages/signup.css';

function Signup({ history }) {
  const [email, setEmail]= useState("");
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [password, setPassword]= useState("");
  const toast = useToast()

  async function setSignUp(){
    console.log(email, firstName, lastName, password)
    api.post("/api/v1/teachers", { email: email, first_name: firstName, last_name: lastName, password: password }).then(response => {
      // localStorage.setItem('token', response.headers.authorization);
      // localStorage.setItem('teacherId', response.data.id);
      // toast({
      //   title: "Login com sucesso",
      //   description: "Seu login foi efetuado com sucesso.",
      //   position: "bottom-right",
      //   status: "success",
      //   duration: 6000,
      //   isClosable: true,
      // })
      history.push('/');
    }).catch(function (error) {
      toast({
        title: "Falha no cadastro",
        description: error?.response?.data?.error_message || "Erro Interno",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    })
  }
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
              <InputText id="inputEmail" value={email}  onChange={e => setEmail(e.target.value)} placeholder="Insira o seu email"/>
            </div>
            <div className="firstNameContainer">
              <h3>Primeiro Nome</h3>
              <InputText id="inputFirstName" value={firstName}  onChange={e => setFirstName(e.target.value)} placeholder="Insira o seu primeiro nome"/>
            </div>
            <div className="lastNameContainer">
              <h3>Sobrenome</h3>
              <InputText id="inputLastName" value={lastName}  onChange={e => setLastName(e.target.value)} placeholder="Insira o seu sobrenome"/>
            </div>
            <div className="passwordContainer">
              <h3>Senha</h3>
              <InputPassword id="inputPassword" value={password}  onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="signupButton">
            <PrimaryButton type="button" id="signupButton" onClick={setSignUp}>
              Cadastrar
            </PrimaryButton>
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
