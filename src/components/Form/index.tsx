import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Cyan, Inside, IntroBg } from "../../style/colors";
import CHead from "../CHead";
import CPara from "../CPara";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StartForm() {
  const [value, setValue] = useState({
    email: "",
  });
  const [error, setError] = useState(false);

  const toastError = () => toast.error("please add your email address");
  const toastSuccess = () => toast.success("send success🎉");

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    if (value.email === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (error) {
      toastError();
    } else {
      toastSuccess();
    }
  };

  useEffect(() => {
    value.email === "" ? setError(true) : setError(false);
  }, [value]);

  return (
    <FormContainer onSubmit={(e: any) => handleSubmit(e)}>
      <CHead>Get early access today</CHead>
      <CPara>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you hav e any question, our support team would be happy to
        help you.
      </CPara>
      <Form>
        <input
          name="email"
          type="text"
          placeholder="example@email.com"
          autoFocus
          value={value.email}
          onChange={handleChange}
        />
        <button type="submit">Get Started For Free</button>
      </Form>
      <ToastContainer theme="dark" position="bottom-left" />
    </FormContainer>
  );
}

export default StartForm;
