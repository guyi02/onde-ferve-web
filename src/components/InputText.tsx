import React from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  name: string;
  placeholderText: string;
  value: string;
  setText: (text: string) => void;
}

const InputText: React.FC<InputProps> = ({
  label,
  name,
  placeholderText,
  setText,
}) => {
  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputComponent
        type="text"
        id={name}
        placeholder={placeholderText}
        onChange={(e) => setText(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  display: inline;
`;

const InputComponent = styled.input`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px 2px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export { InputText };
