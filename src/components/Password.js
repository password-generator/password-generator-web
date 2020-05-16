import React, { useState } from 'react'
import './Password.css'
// import * as pokemons from '../pokedex.json' // let max = 808; let pokemon = pokemons[max].name.english

export default function Password() {
  const [password, setPassword] = useState(null)
  const [password_lenght, setPasswordLenght] = useState(6)
  const [poke_name, setPokeName] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  function generatePassword() {
    if (password_lenght > 20 || password_lenght < 6) {
      alert('Invalid password lenght!')
      return null
    }
    return 'password'
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <p>Password: {password}</p>
      <div>
        <div class='setting'>
          <label>Password lenght</label>
          <input
            type='number'
            min='6'
            max='20'
            defaultValue={6}
            value={password_lenght}
            onChange={e => setPasswordLenght(e.target.value)}
          />
        </div>

        <div class='setting'>
          <label>Include pokemon name</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked
            value={poke_name}
            onChange={e => setPokeName(e.target.value)}
          />
        </div>

        <div class='setting'>
          <label>Include uppercase letters</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={false}
            value={uppercase}
            onChange={e => setUppercase(e.target.value)}
          />
        </div>

        <div class='setting'>
          <label>Include lowercase letters</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={false}
            value={lowercase}
            onChange={e => setLowercase(e.target.value)}
          />
        </div>

        <div class='setting'>
          <label>Include numbers</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked
            value={numbers}
            onChange={e => setNumbers(e.target.value)}
          />
        </div>

        <div class='setting'>
          <label>Include symbols</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={false}
            value={symbols}
            onChange={e => setSymbols(e.target.value)}
          />
        </div>
      </div>

      <button id="buttom_generate" onClick={() => {
        const password_generated = generatePassword()
        setPassword(password_generated)
      }}>
        Generate password
      </button>

    </div>

  )
}
