import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Input, Text, Flex, Spacer, VStack, HStack, Button, Box, InputGroup } from '@chakra-ui/react';
import moment from 'moment';
import { useToast } from "@chakra-ui/react"
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

import api from "../../../services/api";
import teste from "../../randomWords/index"

const CreateCall = ({ ...props }) => {
  const { closeModal, classroomId, refreshPage } = props || {};
  const [titleCall, setTitleCall] = useState('');
  const [dateStart, setDateStart] = useState(moment().format('L LTS'));
  const [dateEnd, setDateEnd] = useState(moment().format('L LTS'));
  const [expiredData, setExpiredData] = useState(moment().format('L LTS'));
  const [confirmationCode, setConfirmationCode] = useState(teste());
  const toast = useToast()


  const callCreation = async () => {
    const token = localStorage.getItem('token')
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
  return (
    <SweetAlert
      showCancel
      confirmBtnText="Criar"
      cancelBtnText="Cancelar"
      confirmBtnBsStyle="primary"
      cancelBtnBsStyle="danger"
      title="Criaçao da Chamada"
      btnSize=''
      onConfirm={() => { callCreation() }}
      onCancel={() => { closeModal() }}
    >

      <Text mb="5px" mt="30px" textAlign='initial'>Titulo da chamada</Text>
      <Input type="text" className="inputText" value={titleCall} onChange={e => setTitleCall(e.target.value)} />
      <Flex>
        <VStack
          // spacing={4}
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
          // spacing={4}
          align="stretch"
        >
          <Text mb="5px" mt="10px" textAlign='initial'>Data final</Text>
          <Input type="datetime-local" className="inputText" value={dateEnd} onChange={e => setDateEnd(e.target.value)} />
        </VStack>
      </Flex>

      <Text mb="5px" mt="10px" textAlign='initial'>Data de expiração</Text>
      <Input type="datetime-local" className="inputText" value={expiredData} onChange={e => setExpiredData(e.target.value)} />
      <br/>
      <Text mb="5px" mt="10px" textAlign='initial'>Código de Confirmação</Text>
      <Flex>
        <HStack
          spacing={4}
          align="stretch"
        >
          <Box w={80}>
            <Input type="text" className="inputText" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)} />
          </Box>
          <Box pt='5px' >
            <Button colorScheme="teal" id="buttonMain" size="md" onClick={() => setConfirmationCode(teste())} >Gerar</Button>
          </Box>
        </HStack>
      </Flex >
      {/*  <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup> */}
    </SweetAlert >
  )
}


export default CreateCall;