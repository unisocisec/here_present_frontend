import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Input, Text, Flex, Spacer, VStack, HStack } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';


const CreateCall = ({...props }) => {
  const { closeModal } = props || {};
  const [titleCall, setTitleCall] = useState('');
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [expiredData, setExpiredData] = useState(new Date());
  const [confirmationCode, setConfirmationCode] = useState('');


  return (
    <SweetAlert
      showCancel
      confirmBtnText="Criar"
      cancelBtnText="Cancelar"
      confirmBtnBsStyle="primary"
      cancelBtnBsStyle="danger"
      title="Criaçao da Chamada"
      btnSize
      onConfirm={() => { }}
      onCancel={() => {closeModal()}}
    >

      <Text mb="5px" mt="30px" textAlign='initial'>Titulo da chamada</Text>
      <Input type="text" className="inputText" value={titleCall} onChange={e => setTitleCall(e.target.value)} />
      <Flex>
        <VStack
          spacing={4}
          align="stretch"
        >
          <Text mb="5px" mt="10px" textAlign='initial'>Data de inicio</Text>
          <Input type="date" className="inputText" value={dateStart} onChange={e => setDateStart(e.target.value)} />
        </VStack>
        <Spacer />
        <HStack mt="50px">
          <ArrowLeftIcon />
          <Spacer />
          <ArrowRightIcon />
        </HStack>
        <Spacer />
        <VStack
          spacing={4}
          align="stretch"
        >
          <Text mb="5px" mt="10px" textAlign='initial'>Data final</Text>
          <Input type="date" className="inputText" value={dateEnd} onChange={e => setDateEnd(e.target.value)} />
        </VStack>
      </Flex>

      <Text mb="5px" mt="10px" textAlign='initial'>Data de expiração</Text>
      <Input type="date" className="inputText" value={expiredData} onChange={e => setExpiredData(e.target.value)} />

      <Text mb="5px" mt="10px" textAlign='initial'>Código de Confirmação</Text>
      <Input type="text" className="inputText" value={confirmationCode} onChange={e => setConfirmationCode(e.target.value)} />

    </SweetAlert>
  )
}


export default CreateCall;