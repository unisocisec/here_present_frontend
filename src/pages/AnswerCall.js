import React, { useState, useEffect } from 'react';

import backgroundCallList from '../images/background_call_list.png';
import Topbar from "../components/TopBar";
import PrimaryButton from "../components/PrimaryButton";
import InputText from "../components/InputText";
import { Img } from "@chakra-ui/react"
import api from "../services/api";
import { useToast } from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import '../styles/pages/answerCall.css';

function AnswerCall() {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [documentaion, setDocumentaion]= useState("");
  const [classroomName, setClassroomName]= useState("");
  const [confirmationCode, setConfirmationCode]= useState("");
  const toast = useToast()
  const tokenCallListId = useParams().call_list_id

  useEffect(() => {
    async function getClassroomName(tokenCallListId) {
      const response = await api.get(`/api/v1/call_lists/get_classroom_name?token_call_list_id=${tokenCallListId}`)
      setClassroomName(response.data.classroom_name)
    }
    getClassroomName(tokenCallListId)
  }, [tokenCallListId])

  async function registerStudentAnswer() {
    api.post(`/api/v1/student_answers`, {
      full_name: name, email: email, confirmation_code: confirmationCode, documentaion: documentaion, call_list_id: tokenCallListId
    }
    ).then(_response => {
      toast({
        title: "Cadastro com Sucesso",
        description: "Obrigado pelo seu cadastro.",
        position: "bottom-right",
        status: "success",
        duration: 6000,
        isClosable: true,
      })
    }).catch(function (error) {
      var error_message;
      if(error?.response?.status === 422){
        error_message = error?.response?.data?.error_message;
      } else {
        error_message = "Informe o professor que não foi possivel cadastrar.";
      }
      toast({
        title: "Falha no cadastro",
        description: error_message,
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    })
  }

  return (
    <div id="pageAnswerCall">
      <Img id="imageBackgroud" src={backgroundCallList} alt="Background" htmlHeight=""/>
      <Topbar/>
      
      <div className="containercallList">
        <div className="containerBackground">
          <div className="callListName">
            Chamada da Turma:
            <br/>
            {classroomName}
          </div>
          <div className="formCallList">
            <div className="nameContainer">
              <h4>Nome</h4>
              <InputText id="inputNameStudent" value={name} onChange={e => setName(e.target.value)} placeholder="Insira o seu nome completo"/>
            </div>
            <div className="emailContainer">
              <h4>E-mail</h4>
              <InputText id="inputEmailStudent" value={email} onChange={e => setEmail(e.target.value)} placeholder="Insira o seu E-mail"/>
            </div>
            <div className="academicRecordContainer">
              <h4>Registro Acadêmico</h4>
              <InputText id="inputAcademicRecordStudent" value={documentaion} onChange={e => setDocumentaion(e.target.value)} placeholder="Insira o seu registro acadêmico"/>
            </div>
            <div className="confirmationCodeContainer">
              <h4>Codigo de confirmação</h4>
              <InputText id="inputconfirmationCodeStudent" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)} placeholder="Insira o codigo de confirmação"/>
            </div>
          </div>
          <div className="newRegisterButton">
            <PrimaryButton type="button" id="newRegister" onClick={() => registerStudentAnswer()}>
              Enviar
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnswerCall;