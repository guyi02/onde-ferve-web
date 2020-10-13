import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type: "default" | "outline";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <Container buttonType={type}>
      <ButtonText buttonType={type}>{text}</ButtonText>
    </Container>
  );
};

const Container = styled.button<{ buttonType: "default" | "outline" }>`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid
    ${({ buttonType, theme }) =>
      buttonType === "default" ? theme.colors.white : theme.colors.primary};
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${({ buttonType, theme }) =>
    buttonType === "default" ? theme.colors.primary : theme.colors.white};
`;

const ButtonText = styled.span<{ buttonType: "default" | "outline" }>`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ buttonType, theme }) =>
    buttonType === "default" ? theme.colors.white : theme.colors.primary};
  font-weight: bold;
`;

export { Button };
