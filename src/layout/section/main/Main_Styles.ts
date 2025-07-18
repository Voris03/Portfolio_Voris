import styled from "styled-components";
import { font } from "../../../styles/Common";
import theme from "../../../styles/Theme";

const Main = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1f1f20;
`;

const Wrapper = styled.div`
  text-align: left;
`;

const MainTitle = styled.h1`
  ${font({ weight: 400, Fmax: 27, Fmin: 20 })};
  p{
    display: none;
  }
`;

const SmallText = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`;

export const S = {
  Main,
  Wrapper,
  MainTitle,
  SmallText,
  Name,
  Photo,
  PhotoWrapper,
};
