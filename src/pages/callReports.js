import React, { useEffect, useState } from 'react';
import TemplatePage from '../components/templatePage';
import StudentReport from '../components/StudentReport';
import { Button, Select, Tabs, TabList, Tab, Link, useToast, Table, Thead, Tbody, Tr, Td, Th, Skeleton, Stack } from "@chakra-ui/react";
import Calendar from 'react-calendar';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import '../styles/pages/callReports.css';
import api from "../services/api";

function ExportAnswers(classroomId, toast){
  const token = localStorage.getItem('token')
  api.get(`/api/v1/classrooms/${classroomId}/export_student_answers_in_classroom`, { headers: { Authorization: token } }).then(response => {
    window.open(response.data.path, '_blank')
  }).catch(err => {
    toast({
      title: "Falha na exportação",
      description: "comunique o suporte em https://github.com/unisocisec/here_present_frontend",
      position: "bottom-right",
      status: "error",
      duration: 6000,
      isClosable: true,
    })
  }
)}

function CallReports({ history }) {
  const toast = useToast()
  const [loadingStudentAnswers, setLoadingStudentAnswers] = useState(true)
  const arrayLoading = ["asdasasd", "asdasdasd", "ASDASD"]
  const classroomId = 1;
  const [call_list_id, setCallListId] = useState([])
  const [studentAnswers, setStudentAnswers] = useState()
  const [callLists, setCallLists] = useState([])

  function SelectCallListId(CallListId){
    // console.log(CallListId)
    // setCallListId(CallListId)
  }

  useEffect(() => {
    async function getStudentAnswers(classroomId) {
      const token = localStorage.getItem('token')
      const response = await api.get(`/api/v1/classrooms/${classroomId}/classroom_student_answers`, { headers: { Authorization: token } })
      setStudentAnswers(response.data)
      setLoadingStudentAnswers(false)
    }
    getStudentAnswers(classroomId)
    async function getCallLists(classroomId) {
      const token = localStorage.getItem('token')
      const response = await api.get(`/api/v1/classrooms/${classroomId}/classroom_call_lists`, { headers: { Authorization: token } })
      setCallLists(response.data)
    }
    getCallLists(classroomId)
  }, [])

  return (
    <TemplatePage
      nameButton={'Criar Chamada'}
      acitiveButton={true}
      acitiveUser={true}
      history={history}
    >
      <div className='callReports'>
        <div className='callSelection'>
          <div className="selection">
            <Select placeholder="Selecione..." borderColor="#00ADB5" onChange={() => SelectCallListId(this)} size="lg" >
              {callLists.map(callList => <option value={callList.id}>{callList.title}</option>)}
            </Select>
          </div>
          <Calendar className='calendar' />
        </div>
        <div className='actions'>
          <div className='buttonPosition'>
            <div className='exportButton'>
              <Button colorScheme="teal" size="lg" type="link"  onClick={() => ExportAnswers(classroomId, toast)}>Exportar Chamadas</Button>
              <Link ml="5" href={`${call_list_id}/AnswerCall`} isExternal>
                Link da Chamada <ExternalLinkIcon mx="2px" />
              </Link>
            </div>
            <div className='tabs'>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Relatório</Tab>
                  {/* <Tab>Membros</Tab> */}
                </TabList>
              </Tabs>
            </div>
          </div>
        </div>
        <div className='table'>
          <div className='bard' >
            <Table variant="striped" colorScheme="teal" >
              <Thead>
                <Tr>
                  <Th>Nome do aluno </Th>
                  <Th>E-mail</Th>
                  <Th>Palavra-Chave</Th>
                  <Th>Check</Th>
                </Tr>
              </Thead>
              <Tbody>
                {loadingStudentAnswers
                    ? arrayLoading.map((arrayLoading, i) => <Tr><Td><Skeleton key={i} isLoaded={!loadingStudentAnswers} h="40px" /></Td></Tr>)
                    : studentAnswers.map(studentAnswer => <StudentReport key={`student_${studentAnswer.id}`} dataKey={studentAnswer.id} name={studentAnswer.full_name} email={studentAnswer.email} confirmationCode={studentAnswer.confirmation_code} check={"V"} />)}
              </Tbody>
            </Table>
          </div>
        </div>
        
      </div>
    </TemplatePage>
  )
}

export default CallReports;
