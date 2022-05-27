import "./Card.css";
import { FaTrash } from "react-icons/fa";

function Card({ transaction, index, excludeCard }) {
  return (
    <div className="card" key={index}>
      {transaction.type === "Entrada" ? (
        <div
          className="color-type"
          style={{ backgroundColor: "var(--color-secondary)" }}
        ></div>
      ) : (
        <div
          className="color-type"
          style={{ backgroundColor: "var(--grey-3)" }}
        ></div>
      )}
      <div className="info-box">
        <div className="box-one">
          <h5>{transaction.description}</h5>
          <p>{transaction.type}</p>
        </div>
        <div className="box-two">
          <span style={transaction.type === 'Entrada' ? ({color: 'var(--color-secondary)'}) : ({color: 'var(--color-primary-2)'})}>{new Intl.NumberFormat('pt-br',
                { style: 'currency', currency: 'BRL' }
              ).format(transaction.value)}</span>
          {excludeCard && <button className="trash" onClick={()=> excludeCard(transaction, index)}><FaTrash /></button>}
        </div>
      </div>
    </div>
  );
}

export default Card;
