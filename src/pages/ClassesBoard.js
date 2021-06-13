import React, { useEffect, useState } from 'react'
import { Skeleton } from "@chakra-ui/react"
import Topbar from "../components/TopBar";
import TemplatePage from '../components/templatePage';
import api from '../services/api'

import '../styles/pages/classesBoard.css';
import ClassCard from '../components/ClassCard';

function ClassesBoard() {
  const [loading, setLoading] = useState(true)
  const cardLoading = [1, 2, 3]
  const [classRooms, setClassRooms] = useState([])

  useEffect(() => {
    async function getClassroom() {
      const teacherId = localStorage.getItem('teacherId')
      const token = localStorage.getItem('token')
      const response = await api.get(`/api/v1/teachers/${teacherId}/teacher_classrooms`, { headers: { Authorization: token } })
      setClassRooms(response.data)
      // setClassRooms([{ id: response.data, name: 'Modelagem de dados', orderStudents: '18', orderNightly: 'noturno' }, { id: 2, name: 'Modelagem de Software', orderStudents: '18', orderNightly: 'vespertino' }])
      setLoading(false)
    }
    getClassroom()
  }, [])

  return (
    <>
    <TemplatePage
        nameButton={'Criar Turma'}
        acitiveButton={true}
        acitiveUser={true}
      >
        <div id="pageClassesBoard">
          <div className="orders-list-container">
              <div className="orders-list-items">
                {loading
                  ? cardLoading.map((cardLoading, i) => <Skeleton key={i} isLoaded={!loading} h="300px" w="300px" />)
                  : classRooms.map(classRoom => <ClassCard key={classRoom.id} name={classRoom.name} orderStudents={classRoom.orderStudents} orderNightly={classRoom.orderNightly} />)}
              </div>
          </div>
        </div>
      </TemplatePage>
    </>
  );
}

export default ClassesBoard;
