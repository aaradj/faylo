import styled from "styled-components";
//Colors
import { Cyan, Inside, IntroBg } from "../../style/colors";

const FormContainer = styled.div`
  width: 60%;
  height: 55vh;
  padding: 2rem;
  border-radius: 10px;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${IntroBg};
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  input {
    width: 50%;
    height: 3.5rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 50px;
    outline: none;
  }
  button {
    background: ${Cyan};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    font-family: Raleway;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 50px;
    :hover: {
      background: ${Inside};
    }
  }
  @media (max-width: 700px) {
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;

export { Form, FormContainer };
