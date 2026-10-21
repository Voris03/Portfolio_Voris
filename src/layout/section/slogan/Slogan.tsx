import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import Container from "../../../components/Container";
import FlexWrapper from "../../../components/FlexWrapper";
import { scroller } from "react-scroll";
import { useLanguage } from "../../../i18n/LanguageContext";

const Slogan: React.FC = () => {
  const { t } = useLanguage();

  return (
    <StyledSlogan>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>{t.slogan.title}</SectionTitle>
          <Button
            type={"button"}
            onClick={() => scroller.scrollTo("contact", { smooth: true, offset: 10 })}
          >
            {t.slogan.hire}
          </Button>
        </FlexWrapper>
      </Container>
    </StyledSlogan>
  );
};

const StyledSlogan = styled.section``;

export default Slogan;