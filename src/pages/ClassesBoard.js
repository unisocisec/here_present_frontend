import Topbar from "../components/TopBar";
import TemplatePage from '../components/templatePage';


import '../styles/pages/classesBoard.css';
import ClassCard from '../components/ClassCard';


function ClassesBoard() {
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
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                </div>
            </div>
        </div>
      </TemplatePage>
    </>
  );
}

export default ClassesBoard;
