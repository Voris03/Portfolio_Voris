import React from "react";
import main from "../../../assets/images/ava.webp";
import FlexWrapper from "../../../components/FlexWrapper";
import Container from "../../../components/Container";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { S } from "./Main_Styles";

const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <S.Wrapper>
            <S.SmallText>Hi There!</S.SmallText>
            <S.Name>
              I am <span>Vladimir Vidus</span>
            </S.Name>
            <S.MainTitle>
              <p>A Frontend Developer.</p>
              <Typewriter
                options={{
                  strings: ["A Frontend Developer."],
                  autoStart: true,
                  loop: true,
                  delay: 100,
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
              <S.Photo src={main} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};

export default Main;
