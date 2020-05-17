import React, { useState } from 'react'
import './Password.css'
import pokedex from '../pokedex.json'

export default function Password() {
  const [password, setPassword] = useState(null)
  const [password_lenght, setPasswordLenght] = useState(6)
  const [poke_name, setPokeName] = useState(true)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <p>Password: {password}</p>
      <div>
        <div className="setting">
          <label>Password lenght</label>
          <input
            type="number"
            min="6"
            max="20"
            defaultValue={6}
            value={password_lenght}
            onChange={setPasswordLenght}
          />
        </div>

        <div className="setting">
          <label>Include pokemon name</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked
            value={poke_name}
            onChange={setPokeName}
            id="number_password_lenght"
            min="6"
            max="20"
          />
        </div>

        <div className="setting">
          <label>Include pokemon custom name</label>
          <input
            type="checkbox"
            className="checkmark"
            id="check_poke_names"
            defaultChecked
          />
        </div>

        <div className="setting">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={false}
            value={uppercase}
            onChange={setUppercase}
            id="check_uppercase"
          />
        </div>

        <div className="setting">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={false}
            value={lowercase}
            onChange={setLowercase}
            id="check_lowercase"
          />
        </div>

        <div className="setting">
          <label>Include numbers</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked
            value={numbers}
            onChange={setNumbers}
            id="check_numbers"
          />
        </div>

        <div className="setting">
          <label>Include symbols</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={false}
            value={symbols}
            onChange={setSymbols}
          />
        </div>
      </div>

      <button
        id="buttom_generate"
        onClick={() => {
          if (password_lenght > 20 || password_lenght < 6) {
            alert('Invalid password lenght!')
          } else {
            let password = poke_name
              ? [
                  String(
                    pokedex[Math.trunc(Math.random() * pokedex.length)].name
                      .english
                  ),
                ]
              : ['']
            let randomCharsArray = []
            if (lowercase) {
              randomCharsArray.push('abcdefghijklmnopqrstuvwxyz')
            }
            if (uppercase) {
              randomCharsArray.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
            }
            if (numbers) {
              randomCharsArray.push('0123456789')
            }
            if (symbols) {
              randomCharsArray.push('!@#$%^&*(){}[]=<>/,.')
            }
            let randomChars = randomCharsArray.join('')
            for (var i = 0; i < password_lenght; i += 1) {
              password.push(
                randomChars.charAt(
                  Math.floor(Math.random() * randomChars.length)
                )
              )
            }

            setPassword(password.join(''))
          }
        }}
      >
        Generate password
      </button>
    </div>
  )
}
