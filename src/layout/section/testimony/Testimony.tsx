import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import Icon from "../../../components/Icon/icon";
import Slider from "../../../components/slider/Slider";
import FlexWrapper from "../../../components/FlexWrapper";
import { S } from "../skills/Skills_Styles";
import Container from "../../../components/Container";

const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>

        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId="quote" />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;
  ${S.IconWrapper} {
    margin: 35px 0 72px;
  }
`;

export default Testimony;
