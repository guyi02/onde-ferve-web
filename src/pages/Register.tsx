import React, { useState } from "react";
import styled from "styled-components";
import { BackGround } from "../components/Background";
import { Button } from "../components/Button";
import { InputSelect } from "../components/InputSelect";
import { InputText } from "../components/InputText";

// import { Container } from './styles';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [type, setType] = useState<string>("");
  return (
    <BackGround>
      <Container>
        <Title>Cadastro</Title>
        <Card>
          <InputText
            label="Email"
            placeholderText="seu email"
            name="email"
            value={email}
            setText={(e) => setEmail(e)}
          />

          <InputText
            label="Senha"
            placeholderText="Digite sua senha"
            name="password"
            value={password}
            setText={(e) => setPassword(e)}
          />

          <InputSelect
            name="type"
            placeholderText="Seleciona seu gênero"
            values={["aa", "bbb"]}
            setSelect={(e) => setType(e)}
          />
          <Button type="default" text="Enviar" />
        </Card>
      </Container>
    </BackGround>
  );
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  text-transform: uppercase;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  height: 400px;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export { Register };
