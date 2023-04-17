import React, { useState, useEffect } from "react";
// Custom Components
import CHead from "../CHead";
import CPara from "../CPara";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Styled Components
import { Form, FormContainer } from "./formStyle";

function StartForm() {
  const [value, setValue] = useState({
    email: "",
  });
  const [error, setError] = useState(false);

  const toastError = () => toast.error("please add your email address");
  const toastSuccess = () => toast.success("send success🎉");

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
