import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Input, Text, Flex, Spacer, VStack, HStack } from '@chakra-ui/react';
import moment from 'moment';
import { useToast } from "@chakra-ui/react"
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';


import api from "../../../services/api";

const CreateCall = ({ ...props }) => {
  const { closeModal, classroomId } = props || {};
  const [titleCall, setTitleCall] = useState('');
  const [dateStart, setDateStart] = useState(moment().format('L LTS'));
  const [dateEnd, setDateEnd] = useState(moment().format('L LTS'));
  const [expiredData, setExpiredData] = useState(moment().format('L LTS'));
  const [confirmationCode, setConfirmationCode] = useState('');
  const toast = useToast()



  const xx = async () => {

    const token = localStorage.getItem('token')
    const response = await api.post('/api/v1/call_lists',
      {
        title: titleCall,
        classroom_id: classroomId,
        date_start: '2021-06-02 01:42:15', //moment(dateStart).format('AAA/MM/DD hh:mm:ss'),
        date_end: '2021-06-03 01:42:15',//moment(dateEnd).format('AAA/MM/DD hh:mm:ss'),
        expired_at: '2021-06-02 01:42:15',//moment(expiredData).format('AAA/MM/DD hh:mm:ss'),
        confirmation_code: confirmationCode,
      },
      { headers: { Authorization: token } },
    ).then(response => {
      toast({
        title: "Chamada cadastrada com sucesso",
        description: response.data.message,
        position: "bottom-right",
        status: "success",
        duration: 8000,
        isClosable: true,
      })
    }).catch(function (error) {
      toast({
        title: "Falha no cadastro da chamada",
        description: error?.response?.data?.error_message || "Erro Interno",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
    })
  }
  
  return (
    <SweetAlert
      showCancel
      confirmBtnText="Criar"
      cancelBtnText="Cancelar"
      confirmBtnBsStyle="primary"
      cancelBtnBsStyle="danger"
      title="Criaçao da Chamada"
      btnSize=''
      onConfirm={() => { xx() }}
      onCancel={() => { closeModal() }}
    >

      <Text mb="5px" mt="30px" textAlign='initial'>Titulo da chamada</Text>
      <Input type="text" className="inputText" value={titleCall} onChange={e => setTitleCall(e.target.value)} />
      <Flex>
        <VStack
          spacing={4}
          align="stretch"
        >
          <Text mb="5px" mt="10px" textAlign='initial'>Data de inicio</Text>
          <Input type="datetime-local" className="inputText" value={dateStart} onChange={e => setDateStart(e.target.value)} />
        </VStack>
        <Spacer />
        {/*  <HStack mt="50px">
          <ArrowLeftIcon />
          <Spacer />
          <ArrowRightIcon />
        </HStack> */}
        <Spacer />
        <VStack
          spacing={4}
          align="stretch"
        >
          <Text mb="5px" mt="10px" textAlign='initial'>Data final</Text>
          <Input type="datetime-local" className="inputText" value={dateEnd} onChange={e => setDateEnd(e.target.value)} />
        </VStack>
      </Flex>

      <Text mb="5px" mt="10px" textAlign='initial'>Data de expiração</Text>
      <Input type="datetime-local" className="inputText" value={expiredData} onChange={e => setExpiredData(e.target.value)} />

      <Text mb="5px" mt="10px" textAlign='initial'>Código de Confirmação</Text>
      <Input type="text" className="inputText" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)} />

    </SweetAlert>
  )
}


export default CreateCall;