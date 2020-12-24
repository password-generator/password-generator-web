import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.form`
  background-color: ${(props) => props.theme.mainBlue};
  box-shadow: 0 2px 10px ${(props) => props.theme.gray};
  padding: 18px;
  border-radius: 20px;
  width: 80%;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 10px 0 20px;
  text-align: center;
`;

export const PasswordStrength = styled.div`
  color: ${(props) => props.theme.mainBlue};
  font-weight: bolder;
  background-color: ${(props) => {
    const pass = props.title;
    let background: string;

    if (pass === undefined) {
      background = props.theme.secondaryBlue;
    } else if (pass === '') {
      background = props.theme.secondaryBlue;
    } else if (pass.substring(pass.length - 6, pass.length) === '(weak)') {
      background = '#FA3333';
    } else if (pass.substring(pass.length - 6, pass.length) === '(good)') {
      background = '#FA6B33';
    } else {
      background = '#8ABC44';
    }

    return background;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 10px;
  letter-spacing: 1px;
  height: 15px;
`;

export const ResultContainer = styled.div`
  background-color: ${(props) => props.theme.blackBlue};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 10px 8px;
  height: 30px;
  width: 95%;
`;

export const ResultSpan = styled.input`
  background-color: ${(props) => lighten(0.1, props.theme.blackBlue)};
  color: #fff;
  font-size: 18px;
  appearance: none;
  outline: none;
  border: none;
  max-height: 23.2px;
  min-width: calc(100% - 35px);
  max-width: calc(100% - 40px);

  &::selection {
    background-color: ${(props) => props.theme.gray};
  }
`;

export const ResultCopyToClipboardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0 solid ${(props) => props.theme.secondaryBlue};
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.theme.secondaryBlue};
  cursor: pointer;
`;

export const PasswordLengthInput = styled.input.attrs({
  type: 'number',
  min: '4',
  max: '1024',
})`
  font-size: 18px;

  &::-webkit-inner-spin-button {
    width: 15px;
    height: 35px;
    margin: 5px;
    padding: 10px;
    transform: rotate(90deg);
    filter: sepia(100%) hue-rotate(90deg);
    cursor: pointer;
  }
`;

export const DefaultInitialTextInput = styled.input.attrs({
  type: 'text',
})`
  font-size: 18px;
  width: 100px;
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  position: relative;
  top: 0;
  left: 0;
  height: 19px;
  width: 19px;
  background-color: ${(props) => props.theme.ice};
  cursor: pointer;
`;

export const Setting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

export const GeneratePasswordButton = styled.button`
  border: 0 solid ${(props) => props.theme.secondaryBlue};
  background-color: ${(props) => props.theme.secondaryBlue};
  outline-color: ${(props) => props.theme.secondaryBlue};
  color: ${(props) => props.theme.white};
  padding: 10px;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
`;
