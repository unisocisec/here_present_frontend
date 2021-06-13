import './styles.css';
// import CloseButton from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function ClassCard ({dataKey, name, school, studentCount, shift}) {
  return (
    <Link to={`/callReports/${dataKey}`}>
      {/* <CloseButton size="sm" /> */}
      <div className={`order-card-container`}>
        <h3 className="order-card-title">
          {name}
        </h3>
        <div className="order-card-description">
          <h3 className="order-card-school">
            {school}
          </h3>
          <div className="space-divisor"></div>
          <p>
            <span className="order-students">{studentCount + " Alunos"}</span>
            <span className="order-shift">{shift}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ClassCard;
