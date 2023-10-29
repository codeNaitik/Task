
import Photo from './images/Photo.png'
import React, { useState } from 'react';
import styled from 'styled-components';



const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //  login logic here
  };

  return (
    <Container>
      <Image src={Photo} alt="Background" />
      <Form>
        <Title>Login</Title>
        <FormGroup>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <RememberMe>
          <Checkbox type="checkbox" id="rememberMe" />
          <Label htmlFor="rememberMe">Remember me</Label>
        </RememberMe>
        <Terms>
          <Checkbox type="checkbox" id="agreeToTerms" />
          <Label htmlFor="agreeToTerms">Agree to terms and conditions</Label>
        </Terms>
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.5;
`;

const Form = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
`;

const Terms = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default LoginScreen;
