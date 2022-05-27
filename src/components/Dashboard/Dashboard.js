import { useState } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";
import "./Dashboard.css";


function Dashboard({switchPage}) {
    const [listTransactions, setListTransactions] = useState([]);
    
    return(
        <div className="dashboard">
            <header>
                <h1><span>Nu</span> Kenzie</h1>
                <button onClick={switchPage}>Início</button>
            </header>
            <section>
                <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
                <TotalMoney listTransactions={listTransactions} />
                <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
            </section>
        </div>
    )
}

export default Dashboard;