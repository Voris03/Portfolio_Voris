import React from "react";
import Icon from "../../components/Icon/icon";
import FlexWrapper from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";

const socialItemData = [
  {
    iconId: "git",
    href: "https://github.com/Voris03",
  },
  {
    iconId: "telega",
    href: "https://t.me/voris03",
  },
  {
    iconId: "discord",
    href: "https://discordapp.com/users/295938903393959938/",
  },
  {
    iconId: "linkin",
    href: "https://www.linkedin.com/in/voris03/",
  },
];

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Vladimir</S.Name>
        <S.SocialList>

          {socialItemData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink href={`${s.href}`}>
                  <Icon
                    height={"21"}
                    width={"21"}
                    viewBox={"-1 0 23 23"}
                    iconId={s.iconId}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}

        </S.SocialList>
        <S.Copyright>© 2024 Vladimir Vidus, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

export default Footer;
