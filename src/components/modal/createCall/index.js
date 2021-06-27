import React, { useState, useEffect } from 'react';
import axios from "axios";
import SweetAlert from 'react-bootstrap-sweetalert';
import { Input, Text, Flex, Spacer, VStack, Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import moment from 'moment';
import { useToast } from "@chakra-ui/react"


import api from "../../../services/api";

const CreateCall = ({ ...props }) => {
  const { closeModal, classroomId, refreshPage } = props || {};
  const [titleCall, setTitleCall] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [expiredData, setExpiredData] = useState('');
  const [confirmationCode, setConfirmationCode] = useState();
  const toast = useToast()

  useEffect(() => {
    randomWords()
  }, []);

  const callCreation = async () => {
    const token = localStorage.getItem('token')

    if (!titleCall) {
      toast({
        title: "Chamada",
        description: "O campo (Titulo da Chamada) e obrigatorio",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('titleCall').focus()
      document.getElementById('titleCall').select()

    } else if (!moment(dateStart).isValid()) {
      toast({
        title: "Chamada",
        description: "O campo (Data de inicio) e obrigatorio",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('dateStart').focus()
      document.getElementById('dateStart').select()

    } else if (!moment(dateEnd).isValid()) {
      toast({
        title: "Chamada",
        description: "O campo (Data final) e obrigatorio",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('dateEnd').focus()
      document.getElementById('dateEnd').select()

    } else if (moment(dateStart).isAfter(moment(dateEnd))) {
      toast({
        title: "Chamada",
        description: "O campo (Data final) nao pode ser menor que a (Data de inicio)",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('dateEnd').focus()
      document.getElementById('dateEnd').select()

    } else if (!confirmationCode) {
      toast({
        title: "Chamada",
        description: "O campo (Código de Confirmação) e obrigatorio",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('confirmationCode').focus()
      document.getElementById('confirmationCode').select()

    } else {
      closeModal();
      try {
        const response = await api.post('/api/v1/call_lists',
          {
            title: titleCall,
            classroom_id: classroomId,
            date_start: moment(dateStart).format('AAA/MM/DD hh:mm:ss'),
            date_end: moment(dateEnd).format('AAA/MM/DD hh:mm:ss'),
            expired_at: moment(expiredData).format('AAA/MM/DD hh:mm:ss'),
            confirmation_code: confirmationCode,
          },
          { headers: { Authorization: token } },
        )
        toast({
          title: "Chamada",
          description: response.data.message,
          position: "bottom-right",
          status: "success",
          duration: 8000,
          isClosable: true,
        })
        refreshPage();
      } catch (error) {
        console.log(error)
        toast({
          title: "Chamada",
          description: error?.response?.data?.error_message || "Erro ao gravar os dados ",
          position: "bottom-right",
          status: "error",
          duration: 6000,
          isClosable: true,
        })
      }
    }
  };

  const randomWords = async () => {
    try {
      const randomWords = await axios.get('https://api.dicionario-aberto.net/random')
      if (randomWords && randomWords.data && randomWords.data.word) {
        setConfirmationCode(randomWords.data.word);
      } else {
        setConfirmationCode('erro')
      }
    } catch (error) {
      console.log(error)
      toast({
        title: "Chamada",
        description: error?.response?.data?.error_message || "Erro não foi posivel gerar a chave",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    }
  };

  return (
    <SweetAlert
      confirmBtnText="Criar"
      confirmBtnBsStyle="primary"
      title="Criaçao da Chamada"
      btnSize=''
      onConfirm={() => { callCreation() }}
      onCancel={() => { closeModal() }}
      customButtons={
        <React.Fragment>
          <Button colorScheme="blue" variant="outline" mr={4} onClick={closeModal}>Cancelar</Button>
          <Button colorScheme="teal" mr={4} onClick={callCreation} >Criar</Button>
        </React.Fragment>
      }
    >

      <Text mb="5px" mt="30px" textAlign='initial'>Titulo da chamada</Text>
      <Input type="text" id='titleCall' className="inputText" value={titleCall} onChange={e => setTitleCall(e.target.value)} />

      <Flex mt="20px">
        <VStack align="stretch" >
          <Text mb="8px" textAlign='initial'>Data de inicio</Text>
          <Input type="datetime-local" id='dateStart' className="inputText" value={dateStart} onChange={e => setDateStart(e.target.value)} />
        </VStack>
        <Spacer />

        <Spacer />
        <VStack align="stretch">
          <Text mb="8px" textAlign='initial'>Data final</Text>
          <Input type="datetime-local" id='dateEnd' className="inputText" value={dateEnd} onChange={e => setDateEnd(e.target.value)} />
        </VStack>
      </Flex>

      <Text mb="8px" mt="20px" textAlign='initial'>Data de expiração</Text>
      <Input type="datetime-local" disabled={true} className="inputText" value={dateEnd} onChange={e => setExpiredData(e.target.value)} />

      <Text mb="8px" mt="20px" textAlign='initial'>Código de Confirmação</Text>
      <InputGroup size="md">
        <Input type="text" value={confirmationCode} id='confirmationCode' className="inputText" onChange={e => setConfirmationCode(e.target.value)} />
        <InputRightElement width="4.5rem" mt='5px'>
          <Button size="md" colorScheme="teal" onClick={() => randomWords()}>
            Gerar
          </Button>
        </InputRightElement>
      </InputGroup>
    </SweetAlert >
  )
};

export default CreateCall;