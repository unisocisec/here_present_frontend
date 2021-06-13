import './styles.css';

function ClassCard ({dataKey, name, school, studentCount, shift}) {
  async function onSelectProduct(key){
    // history.push('/ClassesBoard');
    console.log(dataKey)
  }
  return (
    <div className={`order-card-container`} onClick={() => onSelectProduct({dataKey})}>
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
  )
}

export default ClassCard;
