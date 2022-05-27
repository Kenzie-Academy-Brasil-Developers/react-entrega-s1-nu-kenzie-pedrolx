import "./List.css";
import Card from "../Card/Card";
import { useState } from "react";

function List({ listTransactions, setListTransactions }) {

    const [arr, setArr] = useState([])
    const [conditional, setConditional] = useState(false)

  function excludeCard(transaction, index) {
    const excludearray = [...listTransactions];
    excludearray.splice(index, 1);
    setListTransactions(excludearray);
  }

  function filterArray(type) {
      const newArray = listTransactions.filter((transaction) => transaction.type.includes(type));
      setArr(newArray)
      setConditional(true);
  }

  return (
    <div className="transaction-list">
      <div className="transaction-header">
        <h4>Resumo financeiro</h4>
        <div>
          <button onClick={() => setConditional(false)}>Todos</button>
          <button onClick={() => filterArray('Entrada')}>Entradas</button>
          <button onClick={() => filterArray('Saída')}>Despesas</button>
        </div>
      </div>
      {conditional === false ? (
          listTransactions.map((transaction, index) => {
            return (
              <Card
                transaction={transaction}
                index={index}
                excludeCard={excludeCard}
                key={index}
              />
            );
          })
      ) : (
        arr.map((transaction, index) => {
            return (
              <Card
                transaction={transaction}
                index={index}
                key={index}
              />
            );
          })
      )}
      {listTransactions.length === 0 && <h1>Você ainda não possui nenhum lançamento.</h1>}
    </div>
  );
}

export default List;
