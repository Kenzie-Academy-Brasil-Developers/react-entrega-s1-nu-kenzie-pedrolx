import { useState } from "react";
import "./App.css";
import { FiCreditCard } from "react-icons/fi";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [isImHomepage, setIsInHomepage] = useState(true);

  function switchPage() {
    setIsInHomepage(!isImHomepage);
  }

  return (
    <div className="body">
      {isImHomepage === true ? (
        <div className="App">


          <div className="info-div">
            <h3>
              <span>Nu</span> Kenzie
            </h3>
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button onClick={switchPage}>Iniciar</button>
          </div>

  
          <div className="pink-circle"></div>
          <div className="medium-pink-circle"></div>
          <div className="large-pink-circle"></div>
    

            <div className="image-div">
              <div className="image-header">
                <div className="image-pink"></div>
                <div className="image-green"></div>
                <div className="image-dark"></div>
              </div>
    
              <div className="image-bars"></div>
              <div className="image-bars"></div>
              <div className="image-bars"></div>
              <div className="image-bars"></div>
              <div className="image-bars"></div>
    
              <div className="image-green-card">
                <div>
                  <FiCreditCard />
                </div>
              </div>
            </div>
  
        <div className="image-pink-card">
          <div>
            <FiCreditCard />
          </div>
        </div>
  
      </div>
      ) : (
        <div className="dash-app">
          <Dashboard switchPage={switchPage} />
        </div>
      )}
    </div>
  );
}

export default App;
