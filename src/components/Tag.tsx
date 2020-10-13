import React from "react";
import styled from "styled-components";

interface TagProps {
  type: "default" | "outline";
  text: string;
}

const Tag: React.FC<TagProps> = ({ type, text }) => {
  return (
    <Container buttonType={type}>
      <TagText buttonType={type}>{text}</TagText>
    </Container>
  );
};

const Container = styled.button<{ buttonType: "default" | "outline" }>`
  padding: 6px 14px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: 1px solid
    ${({ buttonType, theme }) =>
      buttonType === "default" ? theme.colors.white : theme.colors.primary};
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${({ buttonType, theme }) =>
    buttonType === "default" ? theme.colors.primary : theme.colors.white};
`;

const TagText = styled.span<{ buttonType: "default" | "outline" }>`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ buttonType, theme }) =>
    buttonType === "default" ? theme.colors.white : theme.colors.primary};
  font-weight: bold;
`;

export { Tag };
