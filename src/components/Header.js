import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 750px;  
  flex-grow : 0;
  font-family: 'Exo 2';
  font-size: 48px;
  line-height: 72px;
  letter-spacing: -0.72px;
  margin: 120px 0 70px 80px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      Snap photos and share like<br /> never before
    </HeaderContainer>
  );
}
