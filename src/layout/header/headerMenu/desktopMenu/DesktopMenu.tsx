import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "./../HeaderMenu_Styles";

const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  );
};

export default DesktopMenu;
