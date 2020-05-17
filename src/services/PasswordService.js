// import pokedex from '../pokedex.json'

class PasswordService {
  password = []
  generate(param) {
    password = param.params.PokemonName
      ? [
          String(
            pokedex[Math.trunc(Math.random() * pokedex.length)].name.english
          ),
        ]
      : ['']
    let randomCharsArray = []
    if (param.params.LowerCaseLetters) {
      randomCharsArray.push('abcdefghijklmnopqrstuvwxyz')
    }
    if (param.params.UpperCaseLetters) {
      randomCharsArray.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }
    if (param.params.Numbers) {
      randomCharsArray.push('0123456789')
    }
    if (param.params.Symbols) {
      randomCharsArray.push('!@#$%^&*(){}[]=<>/,.')
    }
    let randomChars = randomCharsArray.join('')
    for (var i = 0; i < param.params.PasswordLength; i += 1) {
      password.push(
        randomChars.charAt(Math.floor(Math.random() * randomChars.length))
      )
    }
    return password.join('')
  }
}

export default PasswordService
