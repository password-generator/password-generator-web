import React, { useState } from 'react'
import './Password.css'

export default function Password() {
  const [password, setPassword] = useState(null)
  const [password_length, setPasswordLength] = useState(6)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)
  const [initial_text, setInitialText] = useState('')

  const generateRandomCharacter = {
    uppercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    },
    lowercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    },
    numbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    },
    symbols() {
      const symbols = '!@#$%^&*(){}[]=<>/,.'
      return symbols[Math.floor(Math.random() * symbols.length)]
    }
  }

  const generatePassword = () => {
    let pass = ''
    let initial_text_length = initial_text.length

    const checks = [uppercase, 'uppercase', lowercase, 'lowercase', numbers,
      'numbers', symbols, 'symbols'] // pair = value / odd = target //

    if (password_length < 6 || password_length > 20) {
      alert('Invalid password lenght!')
      return null
    }

    if (
      uppercase === false &&
      lowercase === false &&
      numbers === false &&
      symbols === false
    ) {
      alert('No checkbox has been selected!')
      return null
    }

    if (initial_text_length >= password_length) {
      alert('Initial text will not be used, character limit has been exceeded!')
      initial_text_length = 0
    }

    for (let i = 0, n = 0; i < password_length - initial_text_length; i += 1) {
      const value = checks[n]
      const target = checks[n + 1]

      value === true ? pass += generateRandomCharacter[target]() : i -= 1

      n === 8 ? (n = 0) : (n += 2)
    }

    pass = pass.split('').sort(() => 0.5 - Math.random()).join('')

    return initial_text_length > 0 ? `${initial_text}${pass}` : pass
  }

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea')

    if (password === null) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
  }

  return (
    <div className="container">
      <h2>Password Generator</h2>

      <div className="result-container">
        <span id="result">{password}</span>
        <button
          className="buttom-clipboard"
          id="clipboard"
          onClick={copyToClipboard}
        ></button>
      </div>

      <div>
        <div className="setting">
          <label>Password Length</label>
          <input
            type="number"
            min="6"
            max="20"
            value={password_length}
            onChange={e => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="setting">
          <label>Add Initial Text</label>
          <input
            type="text"
            value={initial_text}
            onChange={e => setInitialText(e.target.value)}
          />
        </div>

        <div className="setting">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={true}
            value={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="setting">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={false}
            value={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="setting">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked
            value={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>

        <div className="setting">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            className="checkmark"
            defaultChecked={false}
            value={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
      </div>

      <button
        id="buttom-generate"
        onClick={() => {
          const password_generated = generatePassword()
          setPassword(password_generated)
        }}
      >
        Generate Password
      </button>
    </div>
  )
}
