import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { availableLogInDetails } from "../../common/const";
import { useAppDispatch } from "../../redux/hooks";
import { setLoggedIn, setLogInDetails } from "../../redux/reducers/authSlice";

import {
  ErrorMessage,
  Form,
  FormGroup,
  Input,
  Label,
  LoginButton
} from "./LoginForm.style";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const resetLoginForm = () => {
    setUsername("");
    setPassword("");
  };

  const Login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      username.trim() === availableLogInDetails.username &&
      password.trim() === availableLogInDetails.password
    ) {
      dispatch(setLoggedIn(true));
      dispatch(setLogInDetails({ username, password }));
      setErrorMessage(null);
      navigate("/profile");
    } else {
      setErrorMessage("Please check your entries and try again.");
    }
    resetLoginForm();
  };

  return (
    <Form onSubmit={Login}>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormGroup>
        <Label htmlFor="username">Username:</Label>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          id="password"
          required
        />
      </FormGroup>
      <LoginButton>Log in</LoginButton>
    </Form>
  );
};

export default LoginForm;
