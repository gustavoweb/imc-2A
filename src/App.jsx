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

        <button>Calcular</button>

        <button>Limpar</button>

      </div> {/* fecha imc-form */}

      <div className="result-card">
        <h1>26</h1>
        <h2>Peso Normal</h2>
        <p>índice de Massa Corporal</p>
      </div>

     </div> {/* fecha imc-container */}
    </>
  )
}

