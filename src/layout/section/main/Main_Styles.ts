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
  font-family: ${theme.fonts.main};
  font-size: 14px;
  font-weight: 400;
`;

const Name = styled.h2`
  ${font({
    family: theme.fonts.title,
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

const SloganCard = styled.div`
  width: 350px;
  height: 430px;
  margin-right: 20px;
  padding: 40px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.secondBg};
  text-align: left;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    padding: 32px 24px;
  }
`;

const CodeMark = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 40px;
  font-weight: 700;
  color: ${theme.colors.accent};
`;

const SloganText = styled.p`
  ${font({
    family: theme.fonts.title,
    weight: 700,
    Fmax: 34,
    Fmin: 28,
  })}
  line-height: 1.3;

  span {
    color: ${theme.colors.accent};
  }
`;

const Caption = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

const CardWrapper = styled.div`
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
  SloganCard,
  CodeMark,
  SloganText,
  Caption,
  CardWrapper,
};
