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

export const IssuesList = styled.ul`
  border-top : 1px solid #EEEEEE;
  list-style : none;
  margin-top : 30px;
  padding-top: 30px;

  li {
    display: flex;
    padding: 15px 10px;

    & + li { margin-top: 12px; }

    img {
      border       : 2px solid #0D2636;
      border-radius: 50%;
      height       : 36px;
      width        : 36px;
    }

    div {
      flex       : 1;
      margin-left: 12px;

      p {
        color     : #000000;
        font-size : 12px;
        margin-top: 10px;
      }
    }

    strong {
      font-size: 15px;

      a {
        color          : #222;
        display        : flex;
        margin-bottom  : 2px;
        padding-bottom : 2px;
        text-decoration: none;
        transition     : .3s;

        &:hover { color: #0071DB; }
      }

      span {
        background   : #222222;
        border-radius: 4px;
        color        : #FFF;
        font-size    : 10px;
        font-weight  : 600;
        padding      : 5px 7px;
        
        & + span { margin-left  : 10px; }
      }
    }
  }
`;