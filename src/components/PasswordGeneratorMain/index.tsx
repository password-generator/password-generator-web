import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ClipboardIcon from '../../clipboard-icon.png';
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
} from './styles';

const PasswordGeneratorMain: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(6);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [initialText, setInitialText] = useState('');

  const generateRandomCharacter = {
    uppercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
    lowercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
    numbers() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
    symbols() {
      const symbolsString = '!@#$%^&*(){}[]=<>/,.';
      return symbolsString[Math.floor(Math.random() * symbolsString.length)];
    },
  };

  const generatePassword = () => {
    let pass = '';
    let initialTextLength = initialText.length;

    const checks = [
      uppercase,
      'uppercase',
      lowercase,
      'lowercase',
      numbers,
      'numbers',
      symbols,
      'symbols',
    ]; // pair = value / odd = target //

    if (passwordLength < 6 || passwordLength > 20) {
      toast.error('Invalid password length!');
      return null;
    }

    if (!uppercase && !lowercase && !numbers && !symbols) {
      toast.error('No checkbox has been selected!');
      return null;
    }

    if (initialTextLength >= passwordLength) {
      toast.error('Initial text will not be used, character limit has been exceeded!');
      initialTextLength = 0;
    }

    for (let i = 0, n = 0; i < passwordLength - initialTextLength; i += 1) {
      const value = checks[n];
      const target = checks[n + 1] as
        | 'uppercase'
        | 'lowercase'
        | 'numbers'
        | 'symbols';

      if (value === true) {
        pass += generateRandomCharacter[target]();
      } else {
        i -= 1;
      }
      if (n === 8) {
        n = 0;
      } else {
        n += 2;
      }
    }

    pass = pass
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');

    return initialTextLength > 0 ? `${initialText}${pass}` : pass;
  };

  const copyToClipboard = () => password && navigator.clipboard.writeText(password);

  return (
    <Container>
      <Title>Password Generator</Title>

      <ResultContainer>
        <ResultSpan id="resultSpan">{password}</ResultSpan>
        <ResultCopyToClipboardButton id="clipboard" onClick={copyToClipboard}>
          <img
            src={ClipboardIcon}
            alt="Copy"
            width={40}
            height={40}
          />
        </ResultCopyToClipboardButton>
      </ResultContainer>

      <div>
        <Setting>
          <label>Password Length</label>
          <PasswordLengthInput
            id="passwordLengthInput"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </Setting>

        <Setting>
          <label>Add Initial Text</label>
          <DefaultInitialTextInput
            id="defaultInitialTextInput"
            value={initialText}
            onChange={(e) => setInitialText(e.target.value)}
          />
        </Setting>

        <Setting>
          <label>Include Uppercase Letters</label>
          <CheckBox id="uppercase" defaultChecked onChange={() => setUppercase(!uppercase)} />
        </Setting>

        <Setting>
          <label>Include Lowercase Letters</label>
          <CheckBox id="lowercase" onChange={() => setLowercase(!lowercase)} />
        </Setting>

        <Setting>
          <label>Include Numbers</label>
          <CheckBox id="numbers" defaultChecked onChange={() => setNumbers(!numbers)} />
        </Setting>

        <Setting>
          <label>Include Symbols</label>
          <CheckBox onChange={() => setSymbols(!symbols)} />
        </Setting>
      </div>

      <GeneratePasswordButton
        id="generatePasswordButton"
        onClick={() => {
          const passwordGenerated = generatePassword();
          if (passwordGenerated === null) return;
          setPassword(passwordGenerated);
        }}
      >
        Generate Password
      </GeneratePasswordButton>
      <ToastContainer />
    </Container>
  );
};

export default PasswordGeneratorMain;
