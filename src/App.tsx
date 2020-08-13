import React from 'react';

import { ThemeProvider } from 'styled-components';

import PasswordGeneratorMain from './components/PasswordGeneratorMain';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <PasswordGeneratorMain />
    </div>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
