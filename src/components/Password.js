import React, { useState } from 'react'
import './Password.css'
//import * as pokemons from '../pokedex.json' // let max = 808; let pokemon = pokemons[max].name.english

export default function Password() {
  const [password, setPassword] = useState(null)
  const [password_length, setPasswordLength] = useState(6)
  const [poke_name, setPokeName] = useState(false)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  function generateRandomCharacter(name) {
    if (name === 'uppercase') {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    if (name === 'lowercase') {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    if (name === 'numbers') {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }
    if (name === 'symbols') {
      const symbols = '!@#$%^&*(){}[]=<>/,.'
      return symbols[Math.floor(Math.random() * symbols.length)]
    }
  }

  function generatePassword() {
    let pass = ''
    let shuffled_pass = ''
    let n = 0
    let v = 0
    const checks = [uppercase, 'uppercase', lowercase, 'lowercase', numbers, 'numbers', symbols, 'symbols']

    if (password_length < 6 || password_length > 20) {
      return null
    }

    if (uppercase === false && lowercase === false && numbers === false && symbols === false) {
      alert('No checkbox has been selected!')
      return null
    }

    for (let i = 0; i < password_length; i += 1) {
      if (checks[n] === true) {
        pass += generateRandomCharacter(checks[n + 1])
      } else {
        i -= 1
      }
      n === 8 ? n = 0 : n += 2
    }

    pass = pass.split('')
    while (pass.length > 0) {
      shuffled_pass += pass.splice((pass.length * Math.random()) << 0, 1)
    }

    return shuffled_pass
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <p>Password: {password}</p>
      <div>
        <div class='setting'>
          <label>Password length</label>
          <input
            type='number'
            min='6'
            max='20'
            defaultValue={6}
            value={password_length}
            onChange={e => setPasswordLength(e.target.value)}
          />
        </div>

        <div class='setting'>
          <label>Include pokemon name</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={false}
            value={poke_name}
            onChange={() => setPokeName(!poke_name)}
          />
        </div>

        <div class='setting'>
          <label>Include uppercase letters</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={true}
            value={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div class='setting'>
          <label>Include lowercase letters</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={false}
            value={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div class='setting'>
          <label>Include numbers</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked
            value={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>

        <div class='setting'>
          <label>Include symbols</label>
          <input
            type='checkbox'
            class='checkmark'
            defaultChecked={false}
            value={symbols}
            onChange={() => setSymbols(!symbols)}
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
