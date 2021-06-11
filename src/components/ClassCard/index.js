import './styles.css';

function ClassCard () {
    return (
        <div 
            className={`order-card-container`}
            /*onClick={() => onSelectProduct(product)}*/
        >
            <h3 className="order-card-title">
                UC - Modelagem
            </h3>
            
            <div className="order-card-description">
            <p>
                <span className="order-students">18 Alunos</span>
                <span className="order-nightly">Noturno</span>
            </p>
            </div>
        </div>
    )
}

export default ClassCard;
