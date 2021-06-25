import React, { useEffect, useState } from 'react';
import TemplatePage from '../components/templatePage';
import StudentReport from '../components/StudentReport';
import { Button, Select, Tabs, TabList, Tab, Text, Link, useToast, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import Calendar from 'react-calendar';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import '../styles/pages/callReports.css';
import api from "../services/api";
import { useParams } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination';

function ExportAnswers(classroomId, toast) {
  const token = localStorage.getItem('token')
  api.get(`/api/v1/classrooms/${classroomId}/export_student_answers_in_classroom`, { headers: { Authorization: token } }).then(response => {
    window.open(`${response.data.path}`, '_blank')
  }).catch(_err => {
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
  const classroomId = useParams().classroom_id
  const [callListId, setCallListId] = useState(null)
  const [TokenCallListId, setTokenCallListId] = useState(null)
  const [studentAnswersAllList, setStudentAnswers] = useState([])
  const [studentAnswersCallList, setStudentAnswersCallList] = useState([])
  const [filterAllCallList, setFilterAllCallList] = useState(true)
  const [callLists, setCallLists] = useState([])
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [codeConfirmation, setCodeConfirmation] = useState(null);

  const handleChangePage = async (_event, value) => {
    await setPage(value);
    if (!filterAllCallList){
      SelectStudentAnswersCallList(callListId, value)
    }
  };

  useEffect(() => {
    if (!!filterAllCallList){
      async function getStudentAnswers(classroomId, page = 1) {
        const token = localStorage.getItem('token')
        const response = await api.get(`/api/v1/classrooms/${classroomId}/classroom_student_answers?page=${page}`, { headers: { Authorization: token } })
        setTotalPage(response.headers.total)
        setStudentAnswers(response.data)
      }
      getStudentAnswers(classroomId, page)
    }
    async function getCallLists(classroomId) {
      const token = localStorage.getItem('token')
      const response = await api.get(`/api/v1/classrooms/${classroomId}/classroom_call_lists`, { headers: { Authorization: token } })
      setCallLists(response.data)
    }
    getCallLists(classroomId)
  }, [classroomId, filterAllCallList, page])

  function SelectCallListId(option_selected) {
    const call_list_id = option_selected?.value
    if (call_list_id === "" || call_list_id === "all") {
      setFilterAllCallList(true)
      setCodeConfirmation(null)
    } else {
      setFilterAllCallList(false)
      setCallListId(call_list_id)
      SelectTokenCallListId(call_list_id)
      setCodeConfirmation(option_selected?.title)
      SelectStudentAnswersCallList(call_list_id, page)
    }
  }

  async function SelectStudentAnswersCallList(call_list_id, page = 1) {
    const token = localStorage.getItem('token')
    const response = await api.get(`/api/v1/call_lists/${call_list_id}/call_list_student_answers?page=${page}`, { headers: { Authorization: token } })
    setStudentAnswersCallList(response.data)
    setTotalPage(response.headers.total)
  }

  async function SelectTokenCallListId(call_list_id) {
    const token = localStorage.getItem('token')
    const response = await api.get(`/api/v1/call_lists/${call_list_id}`, { headers: { Authorization: token } })
    setTokenCallListId(response.data.token_call_list)
  }

  function intTotalPage(total_page) {
    total_page = Math.floor(total_page/12) + 1
    return total_page
  }

  return (
    <TemplatePage nameButton={'Criar Chamada'} acitiveButton={true} acitiveUser={true} history={history}>
      <div className='callReports'>
        <div className='callSelection'>
          <div className="selection">
            <Select placeholder="Todas as Chamadas" id="selectCallList" borderColor="#00ADB5" onChange={() => SelectCallListId(document.getElementById("selectCallList")?.options[document.getElementById("selectCallList")?.selectedIndex])} size="lg" >
              {callLists.map(callList => 
              <option key={`call_list_${callList.id}`} value={callList.id} title={callList.confirmation_code}>
                {callList.title}
              </option>)}
            </Select>
          </div>
          <Calendar className='calendar' />
        </div>
        <div className='actions'>
          <div className='buttonPosition'>
            <div className='exportButton'>
              <Button colorScheme="teal" size="lg" type="link" onClick={() => ExportAnswers(classroomId, toast)}>Exportar Chamadas</Button>
              {
                !!TokenCallListId
                ?
                  <Link ml="5" href={`../AnswerCall/${TokenCallListId}`} isExternal>
                    Link da Chamada <ExternalLinkIcon mx="2px" />
                  </Link>
                :
                <div></div>
              }
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
          <Pagination className="paginateCallReports" count={intTotalPage(totalPage)} page={page} onChange={handleChangePage} />
          {
            !!codeConfirmation ?
            <Text>Codigo de confirmação: {codeConfirmation}</Text>
            :
            <div/>
          }
          
          <div className='bard' >
            <Table variant="striped" colorScheme="teal" >
              <Thead>
                <Tr>
                  <Th>Nome do aluno </Th>
                  <Th>E-mail</Th>
                  <Th>Codigo de confirmação</Th>
                  <Th>Check</Th>
                </Tr>
              </Thead>
              <Tbody key={'tbody'}>
                {
                  
                  filterAllCallList
                    ? studentAnswersAllList.map(studentAnswer =>
                      <StudentReport key={`student_${studentAnswer.id}`} dataKey={studentAnswer.id} name={studentAnswer.full_name} email={studentAnswer.email} confirmationCode={studentAnswer.confirmation_code} check={studentAnswer.answer_correct} />
                    )
                    : studentAnswersCallList.map(studentAnswer =>
                      <StudentReport key={`student_${studentAnswer.id}`} dataKey={studentAnswer.id} name={studentAnswer.full_name} email={studentAnswer.email} confirmationCode={studentAnswer.confirmation_code} check={studentAnswer.answer_correct} />
                    )
                }
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </TemplatePage>
  )
}

export default CallReports;
