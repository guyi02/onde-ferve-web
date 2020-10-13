import React from "react";
import styled from "styled-components";

interface InputSelectProps {
  values: Array<string>;
  name: string;
  placeholderText: string;
  setSelect: (text: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({
  values,
  name,
  placeholderText,
  setSelect,
}) => {
  return (
    <Container id={name} placeholder={placeholderText}>
      {values.map((opt) => (
        <>
          <option value={opt}>{opt}</option>
        </>
      ))}
    </Container>
  );
};

const Container = styled.select`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  outline: none;
`;

export { InputSelect };
