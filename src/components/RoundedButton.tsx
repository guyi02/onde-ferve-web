import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface RoundedButtonProps {
  type: "default" | "outline";
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ type }) => {
  return (
    <Container buttonType={type}>
      <IconPlus buttonType={type} icon={faPlus} />
    </Container>
  );
};

const Container = styled.button<{ buttonType: "default" | "outline" }>`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${({ buttonType, theme }) =>
    buttonType === "default" ? theme.colors.primary : theme.colors.white};
`;

const IconPlus = styled(FontAwesomeIcon)<{ buttonType: "default" | "outline" }>`
  color: ${({ buttonType, theme }) =>
    buttonType === "default" ? theme.colors.white : theme.colors.primary};
  font-size: 28px;
`;

export { RoundedButton };
