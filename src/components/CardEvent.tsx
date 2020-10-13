import React from "react";
import styled from "styled-components";

import LogoSrc from "../assets/images/Effect.svg";

interface CardEventProps {
  image?: string;
  status?: boolean;
  title?: string;
  date?: string;
  local?: string;
  friends?: Array<{
    name?: string;
    image?: string;
  }>;
  usersTotal?: number;
}

const CardEvent: React.FC<CardEventProps> = ({
  image,
  status,
  title,
  date,
  local,
  friends,
  usersTotal,
}) => {
  return (
    <Container>
      <CardEventImageArea>
        {/* <CardEventImage src={LogoSrc} /> */}
        <CardEventTitle>testee</CardEventTitle>
      </CardEventImageArea>
    </Container>
  );
};

const Container = styled.view`
  padding: 16px;
  flex-direction: column;
  border-radius: 14px 14px 0px 0px;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CardEventImageArea = styled.view`
  width: 100%;
  height: 300px;
  position: relative;
`;

const CardEventImage = styled.img`
  height: 200px;
  width: 100%;
`;

const CardEventTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export { CardEvent };
