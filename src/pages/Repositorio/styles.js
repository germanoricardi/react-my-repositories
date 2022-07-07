import { Link } from "react-router-dom";
import styled from "styled-components";

export const Loading = styled.div`
  align-items    : center;
  color          : #FFFFFF;
  display        : flex;
  height         : 100vh;
  justify-content: center;
`;

export const Container = styled.div`
  background   : #FFFFFF;
  border-radius: 4px;
  box-shadow   : 0 0 20px rgba(0, 0, 0, .2);
  margin       : 80px auto;
  max-width    : 700px;
  padding      : 30px;
`;

export const Owner = styled.header`
  align-items   : center;
  display       : flex;
  flex-direction: column;

  img {
    border-radius: 20%;
    margin       : 20px 0;
    width        : 150px;
  }

  h1 {
    color    : #0D2636;
    font-size: 30px;
  }

  p {
    color      : #000;
    font-size  : 14px;
    line-height: 1.4;
    margin-top : 5px;
    max-width  : 400px;
    text-align : center;
  }
`;

export const BackButton = styled(Link)`
  background: transparent;
  border    : 0;
  outline   : 0;
`;