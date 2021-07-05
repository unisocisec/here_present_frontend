import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Input, Text, Button, Select, } from '@chakra-ui/react';
import SelectOptions from 'react-select'
import { useToast } from "@chakra-ui/react"

import api from "../../../services/api";


const CreateClass = ({ ...props }) => {
  const { closeModal, refreshPage } = props || {};
  const [nameClass, setNameClass] = useState('');
  const [nameSchool, setNameSchool] = useState('');
  const [daysWeek, setdaysWeek] = useState([]);
  const [shift, setShift] = useState('Diurnal');
  const toast = useToast()


  const ClassCreation = async () => {

    if (!nameClass) {
      toast({
        title: "Turma",
        description: "O campo (Nome da Turma) é obrigatório",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('nameClass').focus()
      document.getElementById('nameClass').select()

    } else if (!nameSchool) {
      toast({
        title: "Turma",
        description: "O campo (Escola) é obrigatório",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('nameSchool').focus()
      document.getElementById('nameSchool').select()

    } else if (!daysWeek.length) {
      toast({
        title: "Turma",
        description: "O campo (Dias) é obrigatório",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('daysWeek').focus()

    } else if (!shift) {
      toast({
        title: "Turma",
        description: "O campo (Período) é obrigatório",
        position: "bottom-right",
        status: "error",
        duration: 6000,
        isClosable: true,
      })
      document.getElementById('shift').focus()

    } else {
      const token = localStorage.getItem('token')
      closeModal();

      try {
        const response = await api.post('/api/v1/classrooms',
          {
            name: nameClass,
            school: nameSchool,
            weekday: daysWeek.map(element => element.value),
            shift: shift,
          },
          { headers: { Authorization: token } },
        )
        toast({
          title: "Turma",
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
          title: "Turma",
          description: error?.response?.data?.error_message || "Erro ao gravar os dados ",
          position: "bottom-right",
          status: "error",
          duration: 6000,
          isClosable: true,
        })
      }
    }
  };

  return (
    <SweetAlert
      confirmBtnText="Criar"
      confirmBtnBsStyle="primary"
      title="Criação da Turma"
      btnSize=''
      onConfirm={() => ClassCreation()}
      onCancel={() => closeModal()}
      customButtons={
        <React.Fragment>
          <Button colorScheme="blue" variant="outline" mr={4} onClick={closeModal}>Cancelar</Button>
          <Button colorScheme="teal" mr={4} onClick={ClassCreation} >Criar</Button>
        </React.Fragment>
      }
    >
      <Text mb="5px" mt="30px" textAlign='initial'>Nome da Turma</Text>
      <Input type="text" id='nameClass' className="inputText" value={nameClass} onChange={e => setNameClass(e.target.value)} />

      <Text mb="5px" mt="30px" textAlign='initial'>Escola</Text>
      <Input type="text" id='nameSchool' className="inputText" value={nameSchool} onChange={e => setNameSchool(e.target.value)} />

      <Text mb="5px" mt="30px" textAlign='initial'>Dias</Text>
      <SelectOptions options={
        [{ value: 'Monday', label: 'Segunda' },
        { value: 'Tuesday', label: 'Terça' },
        { value: 'Wednesday', label: 'Quarta' },
        { value: 'Thursday', label: 'Quinta' },
        { value: 'Friday', label: 'Sexta' },
        { value: 'Saturday', label: 'Sábado' },
        { value: 'Sunday', label: 'Domingo' },]
      }
        onChange={(e) => setdaysWeek(e)}
        value={daysWeek}
        isMulti
        id='daysWeek'
      />

      <Text mb="5px" mt="30px" textAlign='initial'>Período</Text>
      <Select
        id='shift'
        variant="filled" className="inputText"
        onChange={e => setShift(e.target.value)}
        value={shift}
      >
        <option value="Diurnal">matutino</option>
        <option value="Vespertine">vespertino</option>
        <option value="Nightly">noturno</option>
      </Select>

    </SweetAlert >
  )
};

export default CreateClass;