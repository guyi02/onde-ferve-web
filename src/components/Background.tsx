import React from "react";

import styled from "styled-components";

const BackGround: React.FC = ({ children }) => {
  return (
    <Container>
      <Orange />
      <White />
      {children}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  /* transform: rotate(-20deg); */
`;

export const Orange = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1000;
`;

export const White = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1000;
`;

export { BackGround };
