import { useState } from "react";
import "./Form.css";

function Form({ listTransactions, setListTransactions }) {
  const [transaction, setTransaction] = useState({
    value: 0,
    type: "Entrada",
    description: "",
  });

  function sendTransaction(newTransaction, event) {
    event.preventDefault()
    setListTransactions([newTransaction, ...listTransactions]);
  }

  return (
        <form className="form" onSubmit={(event) => sendTransaction(transaction, event)}>

            <div className="description">
                <label>Descrição</label>
                <input
                    inputMode="latin"
                    minLength={5}
                    onChange={(event) => setTransaction({...transaction, description: event.target.value})}
                    value={transaction.description}
                    type={"text"}
                    placeholder="Digite aqui sua descrição"
                >
                </input>
            </div>

            <div className="value">
                <label>Valor</label>
                <input
                    min={0}
                    inputMode="number"
                    onChange={(event) => setTransaction({...transaction, value: event.target.value})}
                    value={transaction.value}
                    type={"number"}
                    placeholder="Valor"
                ></input>
            </div>

            <div className="type">
                <label>Tipo de valor</label>
                <select
                    onChange={(event) => setTransaction({...transaction, type: event.target.value})}
                    name="transaction-type"
                >
                    <option value='Entrada'>Entrada</option>
                    <option value='Saída'>Saída</option>
                </select>
            </div>
            <button type="submit">Inserir Valor</button>
            
        </form>
  );
}

export default Form;
