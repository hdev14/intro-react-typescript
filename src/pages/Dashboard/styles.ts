import styled, { css } from 'styled-components';
import {shade} from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  max-width: 450px;
  line-height:56px;
  margin-top: 80px;
`;

interface FormProps {
  hasError: boolean
};

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 1px solid white;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: white;
    font-weight: bold;
    background-color: #04d361;
    transition: background-color .2s;

    &:hover {
      background-color: ${shade(0.2, "#04d361")};
    }
  }

`;

export const Error = styled.span`
  display: block;
  margin-top: 5px;
  color: #c53030;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: white;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform .2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
    }

  }
`;
