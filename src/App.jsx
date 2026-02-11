import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
     <div className="imc-container">
      <div className="imc-card">
        <h1>Calculadora de IMC</h1>
        <p>Descubra seu índice de massa corporal.</p>
      </div>

      <div className="imc-form">
        <input 
          type="number" 
          name='peso'
          placeholder='Peso Ex: 70'  
        />

        
        <input 
          type="number" 
          name='altura' 
          placeholder='Altura Ex: 1.70'
        />

      </div>

     </div> {/* fecha imc-container */}
    </>
  )
}

