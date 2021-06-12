import './styles.css';

function ClassCard ({name, orderStudents, orderNightly}) {
  return (
    <div 
        className={`order-card-container`}
        /*onClick={() => onSelectProduct(product)}*/
    >
        <h3 className="order-card-title">
            {name}
        </h3>
        
        <div className="order-card-description">
            <p>
                <span className="order-students">{orderStudents} Alunos</span>
                <span className="order-nightly">{orderNightly}</span>
            </p>
        </div>
    </div>
  )
}

export default ClassCard;
