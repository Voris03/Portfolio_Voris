import styled from "styled-components";
import theme from "../../styles/Theme";

const Header = styled.header`
  background-color: #1F1F20E5;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  // the mobile burger is a fixed 200x200 button sticking out of the
  // top right corner by 100px — keep the switch outside its click area
  @media ${theme.media.tablet} {
    margin-right: 90px;
  }
`

export const S = {
    Header,
    Controls,
}
