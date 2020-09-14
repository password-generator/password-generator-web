import styled from 'styled-components';

export const Container = styled.form`
  background-color: ${(props) => props.theme.mainBlue};
  box-shadow: 0px 2px 10px ${(props) => props.theme.gray};
  margin-top: 10vh;
  padding: 18px;
  border-radius: 20px;
  width: 335px;
  max-width: 75%;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 10px 0 20px;
  text-align: center;
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
export const ResultSpan = styled.span`
  max-height: 23.2px;
  max-width: calc(100% - 40px);
  overflow-y: hidden !important;
  overflow-x: auto;
  scroll-margin-top: 3px;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.gray};
    border-radius: 3px;
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
