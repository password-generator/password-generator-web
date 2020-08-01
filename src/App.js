import React from 'react'
import PasswordGeneratorMain from './components/PasswordGeneratorMain'

import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <PasswordGeneratorMain />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
