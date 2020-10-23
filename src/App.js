import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [alimentos, setAlimentos] = useState([]);
  const [primeiroAlimento, setAlimento] = useState({});
  const [primeiroAlimento2, setAlimento2] = useState({});

  useEffect(() => {
    axios.get(`https://taco-food-api.herokuapp.com/api/v1/food`)
    .then(res => {
      setAlimentos(res.data);
    })
  }, [])
  
  return (
    <div className="App">
      <div className="DivAlimentos">
        <div className="Select">
          {alimentos.map((a) => <div className={primeiroAlimento.id && a.id == primeiroAlimento.id?'divLine lineActive':'divLine'} onClick={() => setAlimento(a)}>{a.description}</div>)}
        </div>
        <div className="DivKcal">
          <div className="DivTitle">Calorias</div>
          {primeiroAlimento.attributes?(
            <div>{primeiroAlimento.attributes.energy.kcal.toFixed(2)}</div>
          ):(
            <div>0</div>
          )}
        </div>
      </div>
      
      <div className="DivAlimentos">
        <div className="Select">
          {alimentos.map((a) => <div className={primeiroAlimento2.id && a.id == primeiroAlimento2.id?'divLine lineActive':'divLine'} onClick={() => setAlimento2(a)}>{a.description}</div>)}
        </div>
        <div className="DivKcal">
          <div className="DivTitle">Calorias</div>
          {primeiroAlimento2.attributes?(
            <div>{primeiroAlimento2.attributes.energy.kcal.toFixed(2)}</div>
          ):(
            <div>0</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
