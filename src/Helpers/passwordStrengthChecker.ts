/* This module attemps to measure a password strength by evaluating a series of
 * positive and negative criteria. */

/* Number of characters of a password. The more the better. */
const numberOfCharacters = (password: string): number => {
  return password.length * 4;
};

/* Number of uppper case letters of a password.
 It weigths *2 as a positve criteria. */
const numberOfUpperCaseLetters = (password: string): number => {
  let upperCaseCounter = 0;

  const isUpperCase = (letter: string): boolean => {
    return /[A-Z]/.test(letter);
  };

  for (let i = 0; i < password.length; i += 1) {
    if (isUpperCase(password.charAt(i))) {
      upperCaseCounter += 1;
    }
  }

  return upperCaseCounter === 0 ? 0 : (password.length - upperCaseCounter) * 2;
};

/* Number of lower case letters of a password.
 It weigths *2 as a positve criteria. */
const numberOfLowerCaseLetters = (password: string): number => {
  let lowerCaseCounter = 0;

  const isLowerCase = (letter: string): boolean => {
    return /[a-z]/.test(letter);
  };

  for (let i = 0; i < password.length; i += 1) {
    if (isLowerCase(password.charAt(i))) {
      lowerCaseCounter += 1;
    }
  }

  return lowerCaseCounter === 0 ? 0 : (password.length - lowerCaseCounter) * 2;
};

/* Number of numeric characters of a password.
 It weigths *4 as a positve criteria. */
const numberOfNumericCharacters = (password: string): number => {
  const passwordNumbersArray = password.match(/\d/g);

  const numbers =
    passwordNumbersArray === null ? 0 : passwordNumbersArray.length;

  return numbers * 4;
};

/* Number of symbols (not numbers or letters) of a password.
 It weigths *6 as a positve criteria. */
const numberOfSymbols = (password: string): number => {
  let numberOrLetterCounter = 0;

  const isNumberOrLetter = (letter: string): boolean => {
    return /[a-zA-Z0-9]/.test(letter);
  };

  for (let i = 0; i < password.length; i += 1) {
    if (isNumberOrLetter(password.charAt(i))) {
      numberOrLetterCounter += 1;
    }
  }

  if (numberOrLetterCounter === password.length) {
    return 0;
  }

  return (password.length - numberOrLetterCounter) * 6;
};

/* Does this password contains only letters?
 It weigths *1 as a negative criteria. */
const containsLettersOnly = (password: string): number => {
  let letterCounter = 0;

  const isLetter = (letter: string): boolean => {
    return /[a-zA-Z]/.test(letter);
  };

  for (let i = 0; i < password.length; i += 1) {
    if (isLetter(password.charAt(i))) {
      letterCounter += 1;
    }
  }

  return letterCounter === password.length ? letterCounter : 0;
};

/* Does this password contain only numbers?
 It weigths *1 as a negative criteria. */
const containsNumbersOnly = (password: string): number => {
  let numberCounter = 0;

  const isNumber = (letter: string): boolean => {
    return /[0-9]/.test(letter);
  };

  for (let i = 0; i < password.length; i += 1) {
    if (isNumber(password.charAt(i))) {
      numberCounter += 1;
    }
  }

  return numberCounter === password.length ? numberCounter : 0;
};

/* Does this password contain repetated characters?
 It weigths *1 as a negative criteria. */
const containsRepeatedCharacters = (password: string): number => {
  const result: string[] = [];
  const passwordRepeatedArray = password
    .toLowerCase()
    .split('')
    .sort()
    .join('')
    .match(/(.)\1+/g);

  if (passwordRepeatedArray != null) {
    passwordRepeatedArray.forEach((character) => {
      result.push(character[0]);
    });
  }
  return result.length;
};

/* Does this password contain more than three sequencial characters of the same?
 It weigths *2 as a negative criteria. */
const containsMoreThanThreeSequencialCharacters = (
  password: string,
): number => {
  const consecultiveCharacters: number[] = [];

  for (let i = 0; i < password.length; i += 1) {
    const fristChar = password.charAt(i);
    const secondChar = password.charAt(i + 1);
    const thirdChar = password.charAt(i + 2);

    if (thirdChar) {
      if (thirdChar === secondChar && secondChar === fristChar) {
        consecultiveCharacters.push(1);
      }
    }
  }
  return consecultiveCharacters.length * 2;
};

/* This function attempts to measure a strength of a password.
 * In order to do so, it evaluates a number of positive and negative factors. */
const passwordStrengthChecker = (password: string): string => {
  let passwordStrength: number;

  /* Password strength additions. */
  passwordStrength = numberOfCharacters(password);
  passwordStrength += numberOfUpperCaseLetters(password);
  passwordStrength += numberOfLowerCaseLetters(password);
  passwordStrength += numberOfNumericCharacters(password);
  passwordStrength += numberOfSymbols(password);

  /* Password strength deductions. */
  passwordStrength -= containsLettersOnly(password);
  passwordStrength -= containsNumbersOnly(password);
  passwordStrength -= containsRepeatedCharacters(password);
  passwordStrength -= containsMoreThanThreeSequencialCharacters(password);

  let passwordStrengthStatus: string;

  /* Here we just concatenate a string to exibe back at the front-end. */
  if (passwordStrength === 0) {
    passwordStrengthStatus = '';
  } else if (passwordStrength > 100) {
    passwordStrengthStatus = `${100} % (strong)`;
  } else if (passwordStrength <= 45) {
    passwordStrengthStatus = `${passwordStrength.toString()} % (weak)`;
  } else if (passwordStrength > 45 && passwordStrength <= 60) {
    passwordStrengthStatus = `${passwordStrength.toString()} % (good)`;
  } else {
    passwordStrengthStatus = `${passwordStrength.toString()} % (strong)`;
  }

  return passwordStrengthStatus;
};

export default passwordStrengthChecker;
