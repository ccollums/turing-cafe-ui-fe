import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form.js'
import Reservations from './Reservations'

const App = () => {
  const [rezos, setRezos] = useState([]);

  const getRezos = async () => {
    const url = 'http://localhost:3001/api/v1/reservations'
    try {
      const response = await fetch(url)
      const rezos = await response.json()
      setRezos(rezos)
    } catch(error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getRezos()
  }, [])

  const addRezo = (newRezo) => {
    setRezos([...rezos, newRezo]);
  }

  const deleteRezo = (id) => {
    const filteredRezos = rezos.filter(rezo => rezo.id !== id);
    setRezos(filteredRezos)
  }
  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRezo={addRezo}/>
        </div>
        <div className='resy-container'>
          <Reservations rezos={rezos} deleteRezo={deleteRezo}/>
        </div>
      </div>
    )
}

export default App;
