import React from "react";
import main from "../../../assets/images/ava.webp";
import FlexWrapper from "../../../components/FlexWrapper";
import Container from "../../../components/Container";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { S } from "./Main_Styles";
import { useLanguage } from "../../../i18n/LanguageContext";

const Main: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <S.Wrapper>
            <S.SmallText>{t.main.greeting}</S.SmallText>
            <S.Name>
              {t.main.iAm} <span>{t.main.name}</span>
            </S.Name>
            <S.MainTitle>
              <p>{t.main.role}</p>
              {/* key remounts Typewriter: it ignores new strings after start */}
              <Typewriter
                key={lang}
                options={{
                  strings: t.main.typewriter,
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 30,
                }}
              />
            </S.MainTitle>
          </S.Wrapper>

          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={main} alt={t.main.photoAlt} />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

export default Main;
