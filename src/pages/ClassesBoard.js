import React, { useEffect, useState } from 'react'
import { Skeleton } from "@chakra-ui/react"
import TemplatePage from '../components/templatePage';
import ClassCard from '../components/ClassCard';
import CreateClass from '../components/modal/createClass/index';

import api from '../services/api'
import '../styles/pages/classesBoard.css';

function ClassesBoard({ history }) {
  const [loading, setLoading] = useState(true)
  const cardLoading = [1, 2, 3]
  const [classRooms, setClassRooms] = useState([])
  const [showCreateClass, setShowCreateClass] = useState(false)

  useEffect(() => {
    getClassroom()
  }, [])

  async function getClassroom() {
    const teacherId = localStorage.getItem('teacherId')
    const token = localStorage.getItem('token')
    const response = await api.get(`/api/v1/teachers/${teacherId}/teacher_classrooms`, { headers: { Authorization: token } })
    setClassRooms(response.data)
    setLoading(false)
  };

  return (
    <>
      <TemplatePage
        history={history}
        nameButton={'Criar Turma'}
        acitiveButton={true}
        acitiveUser={true}
        onClick={() => setShowCreateClass(true)}
      >
        <div id="pageClassesBoard">
          <div className="orders-list-container">
            <div className="orders-list-items">
              {loading
                ? cardLoading.map((cardLoading, i) => <Skeleton key={i} isLoaded={!loading} h="300px" w="300px" />)
                : classRooms.map(classRoom => <ClassCard key={classRoom.id} dataKey={classRoom.id} name={classRoom.name} school={classRoom.school} studentCount={classRoom.student_count} shift={classRoom.shift} />)}
            </div>
          </div>
        </div>
      </TemplatePage>
      {showCreateClass &&
        <CreateClass
          closeModal={() => setShowCreateClass(false)}
          refreshPage={() => getClassroom()}
        />
      }
    </>
  );
}

export default ClassesBoard;
