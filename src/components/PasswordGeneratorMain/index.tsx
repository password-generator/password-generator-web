import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { checkStrength } from '@password-generator/check-strength';
import { generatePassword } from '@password-generator/package';

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
  PasswordStrength,
} from './styles';

type IPasswordStrengthRange =
  | 'Very Secure'
  | 'Secure'
  | 'Very Strong'
  | 'Strong'
  | 'Average'
  | 'Weak'
  | 'Very Weak'
  | '';

const passwordStrengthColor = (
  passwordStrengthRange: IPasswordStrengthRange,
): string => {
  const color = {
    red: '#FA3333',
    orange: '#FA6B33',
    green: '#8ABC44',
  };
  switch (passwordStrengthRange) {
    case '':
      return color.red;
    case 'Very Weak':
      return color.red;
    case 'Weak':
      return color.red;
    case 'Average':
      return color.orange;
    case 'Strong':
      return color.orange;
    case 'Very Strong':
      return color.orange;
    case 'Secure':
      return color.green;
    case 'Very Secure':
      return color.green;
    default:
      return color.red;
  }
};

const PasswordGeneratorMain: React.FC = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordColor, setPasswordColor] = useState('');

  const [preferences, setPreferences] = useState({
    initialText: '',
    passwordLength: 6,
    pronounceable: false,
    uppercase: true,
    lowercase: false,
    numbers: true,
    symbols: false,
  });

  const [cachedSettings, setCachedSettings] = useState({
    ...preferences,
  });

  const handleCopyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        toast.success('Password was copied to your clipboard!');
      });
    }
  };

  const handleToogleGeneratePronunceablePassword = () => {
    if (!preferences.pronounceable) {
      setCachedSettings({
        ...preferences,
      });
      setPreferences({
        ...preferences,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        pronounceable: true,
      });
    } else {
      setPreferences({
        ...cachedSettings,
        passwordLength: preferences.passwordLength,
        initialText: preferences.initialText,
      });
    }
  };

  const handleFormSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    try {
      const passwordGenerated = generatePassword({
        length: preferences.passwordLength,
        initialText: preferences.initialText,
        useChars: {
          lowercase: preferences.lowercase,
          numbers: preferences.numbers,
          symbols: preferences.symbols,
          uppercase: preferences.uppercase,
          pronounceable: preferences.pronounceable,
        },
      });
      if (passwordGenerated !== null) {
        setPassword(passwordGenerated);
        const { points, range } = checkStrength(passwordGenerated);
        const color = passwordStrengthColor(range as IPasswordStrengthRange);
        setPasswordStrength(`${points}% (${range})`);
        setPasswordColor(color);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Container onSubmit={handleFormSubmit}>
      <Title>Password Generator</Title>

      <ResultContainer>
        <ResultSpan data-test-id="resultSpan" value={password} readOnly />
        <ResultCopyToClipboardButton
          type="button"
          data-test-id="clipboard"
          onClick={handleCopyToClipboard}
        >
          <img src={ClipboardIcon} alt="Copy" width={40} height={40} />
        </ResultCopyToClipboardButton>
      </ResultContainer>

      <PasswordStrength color={passwordColor}>
        {passwordStrength}
      </PasswordStrength>

      <div>
        <Setting>
          <label>Password Length</label>
          <PasswordLengthInput
            data-test-id="passwordLengthInput"
            value={preferences.passwordLength}
            onChange={(e) => {
              setPreferences({
                ...preferences,
                passwordLength: Number(e.target.value),
              });
            }}
          />
        </Setting>

        <Setting>
          <label>Add Initial Text</label>
          <DefaultInitialTextInput
            data-test-id="defaultInitialTextInput"
            value={preferences.initialText}
            onChange={(e) => {
              setPreferences({ ...preferences, initialText: e.target.value });
            }}
          />
        </Setting>

        <Setting>
          <label>Pronounceable Password</label>
          <CheckBox
            data-test-id="pronounceable"
            checked={preferences.pronounceable}
            onChange={handleToogleGeneratePronunceablePassword}
          />
        </Setting>

        <Setting>
          <label>Include Uppercase Letters</label>
          <CheckBox
            data-test-id="uppercase"
            checked={preferences.uppercase}
            onChange={() => {
              setPreferences({
                ...preferences,
                uppercase: !preferences.uppercase,
              });
            }}
            disabled={preferences.pronounceable}
          />
        </Setting>

        <Setting>
          <label>Include Lowercase Letters</label>
          <CheckBox
            data-test-id="lowercase"
            checked={preferences.lowercase}
            onChange={() => {
              setPreferences({
                ...preferences,
                lowercase: !preferences.lowercase,
              });
            }}
            disabled={preferences.pronounceable}
          />
        </Setting>

        <Setting>
          <label>Include Numbers</label>
          <CheckBox
            data-test-id="numbers"
            checked={preferences.numbers}
            onChange={() => {
              setPreferences({ ...preferences, numbers: !preferences.numbers });
            }}
            disabled={preferences.pronounceable}
          />
        </Setting>

        <Setting>
          <label>Include Symbols</label>
          <CheckBox
            data-test-id="symbols"
            checked={preferences.symbols}
            onChange={() => {
              setPreferences({ ...preferences, symbols: !preferences.symbols });
            }}
            disabled={preferences.pronounceable}
          />
        </Setting>
      </div>

      <GeneratePasswordButton
        type="submit"
        data-test-id="generatePasswordButton"
      >
        Generate Password
      </GeneratePasswordButton>
      <ToastContainer />
    </Container>
  );
};

export default PasswordGeneratorMain;
