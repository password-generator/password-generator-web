import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  .App {
    font-family: 'Muli', sans-serif;
    color: ${props => props.theme.white};
    text-align: center;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    background-color: ${props => props.theme.mainPurple};
    margin: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`
