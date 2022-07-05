import styled, { keyframes, css } from 'styled-components';

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
    border       : 1px solid ${props => (props.error ? '#FF0000' : '#DDDDDD')};
    border-radius: 4px;
    flex         : 1;
    font-size    : 17px;
    padding      : 10px 15px;
  }
`;

// Criando animação do botão
const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  align-items    : center;
  background     : #0d2636;
  border         : 0;
  border-radius  : 4px;
  display        : flex;
  justify-content: center;
  margin-left    : 10px;
  padding        : 0 15px;

  &[disabled] {
    cursor : not-allowed;
    opacity: .5;
  }

  ${props => props.loading &&
    css`
      svg { animation: ${animate} 2s linear infinite; }
    `
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    align-items    : center;
    display        : flex;
    flex-direction : row;
    justify-content: space-between;
    padding        : 15px 0;

    & + li {
      border-top: 1px solid #eeeeee;
    }

    a {
      color          : #0D2636;
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button'
})`
  background   : transparent;
  border       : 0;
  border-radius: 4px;
  color        : #0D2636;
  padding      : 8px 7px;
  outline      : 0;
`;