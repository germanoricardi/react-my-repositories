import styled from 'styled-components';

export const Container = styled.div`
  background   : #FFFFFF;
  border-radius: 4px;
  box-shadow   : 0 0 20px rgba(0,0,0, .2);
  margin       : 80px auto;
  max-width    : 700px;
  padding      : 30px;

  h1 {
    align-items   : center;
    display       : flex;
    flex-direction: row;
    font-size     : 20px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  display       : flex;
  flex-direction: row;
  margin-top    : 30px;

  input {
    border       : 1px solid #DDDDDD;
    border-radius: 4px;
    flex         : 1;
    font-size    : 17px;
    padding      : 10px 15px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  align-items    : center;
  background     : #0d2636;
  border         : 0;
  border-radius  : 4px;
  display        : flex;
  justify-content: center;
  margin-left    : 10px;
  padding        : 0 15px;
`;