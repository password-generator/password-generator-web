import React, { useState } from 'react'
import {
  Container,
  Title,
  ResultContainer,
  ResultSpan,
  ResultCopyToClipboardButton,
  Setting,
  PasswordLengthInput,
  GeneratePasswordButton,
  DefaultInitialTextInput,
  CheckBox,
} from './styles'

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
    },
  }

  const generatePassword = () => {
    let pass = ''
    let initial_text_length = initial_text.length

    const checks = [
      uppercase,
      'uppercase',
      lowercase,
      'lowercase',
      numbers,
      'numbers',
      symbols,
      'symbols',
    ] // pair = value / odd = target //

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

      value === true ? (pass += generateRandomCharacter[target]()) : (i -= 1)

      n === 8 ? (n = 0) : (n += 2)
    }

    pass = pass
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('')

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
    <Container>
      <Title>Password Generator</Title>

      <ResultContainer>
        <ResultSpan>{password}</ResultSpan>
        <ResultCopyToClipboardButton id='clipboard' onClick={copyToClipboard}>
          <img
            src={require('../../clipboard-icon.png')}
            alt='Copy'
            width={40}
            height={40}
          ></img>
        </ResultCopyToClipboardButton>
      </ResultContainer>

      <div>
        <Setting>
          <label>Password Length</label>
          <PasswordLengthInput
            value={password_length}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </Setting>

        <Setting>
          <label>Add Initial Text</label>
          <DefaultInitialTextInput
            value={initial_text}
            onChange={(e) => setInitialText(e.target.value)}
          />
        </Setting>

        <Setting>
          <label>Include Uppercase Letters</label>
          <CheckBox
            defaultChecked
            value={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </Setting>

        <Setting>
          <label>Include Lowercase Letters</label>
          <CheckBox
            value={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </Setting>

        <Setting>
          <label>Include Numbers</label>
          <CheckBox
            defaultChecked
            value={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </Setting>

        <Setting>
          <label>Include Symbols</label>
          <CheckBox value={symbols} onChange={() => setSymbols(!symbols)} />
        </Setting>
      </div>

      <GeneratePasswordButton
        onClick={() => {
          const password_generated = generatePassword()
          setPassword(password_generated)
        }}
      >
        Generate Password
      </GeneratePasswordButton>
    </Container>
  )
}
