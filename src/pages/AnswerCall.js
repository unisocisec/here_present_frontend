import React from 'react';

import backgroundCallList from '../images/background_call_list.png';
import Topbar from "../components/TopBar";
import PrimaryButton from "../components/PrimaryButton";
import InputText from "../components/InputText";
import { Img } from "@chakra-ui/react"


import '../styles/pages/answerCall.css';


function AnswerCall() {
  return (
    <div id="pageAnswerCall">
      <Img id="imageBackgroud" src={backgroundCallList} alt="Background" htmlHeight=""/>
      <Topbar/>
      
      <div className="containercallList">
        <div className="containerBackground">
          <div className="callListName">
            Chamada da Turma:
            <br/>
            UC-Modelagem
          </div>
          <div className="formCallList">
            <div className="nameContainer">
              <h4>Nome</h4>
              <InputText id="inputNameStudent" placeholder="Insira o seu nome completo"/>
            </div>
            <div className="emailContainer">
              <h4>E-mail</h4>
              <InputText id="inputEmailStudent" placeholder="Insira o seu E-mail"/>
            </div>
            <div className="academicRecordContainer">
              <h4>Registro Acadêmico</h4>
              <InputText id="inputAcademicRecordStudent" placeholder="Insira o seu registro acadêmico"/>
            </div>
            <div className="confirmationCodeContainer">
              <h4>Codigo de confirmação</h4>
              <InputText id="inputconfirmationCodeStudent" placeholder="Insira o codigo de confirmação"/>
            </div>
          </div>
          <div className="newRegisterButton">
            <PrimaryButton type="button" id="newRegister">
              Enviar
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerCall;