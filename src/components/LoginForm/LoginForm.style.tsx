import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 25rem;
  min-height: 20rem;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 10px;
  outline: none;
`;

const LoginButton = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  background: #fff;
  border: none;
`;

const ErrorMessage = styled.p`
  background-color: lightpink;
  color: firebrick;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 1rem;
`
export { Form, FormGroup, Input, Label, LoginButton, ErrorMessage };
