import React from "react";
import Icon from "../../components/Icon/icon";
import FlexWrapper from "../../components/FlexWrapper";
import { S } from "./Footer_Styles";
import { useLanguage } from "../../i18n/LanguageContext";

const socialItemData = [
  {
    iconId: "git",
    title: "GitHub",
    href: "https://github.com/Voris03",
  },
  {
    iconId: "telega",
    title: "Telegram",
    href: "https://t.me/voris03",
  },
  {
    iconId: "discord",
    title: "Discord",
    href: "https://discordapp.com/users/295938903393959938/",
  },
  {
    iconId: "linkin",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/voris03/",
  },
];

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>{t.footer.name}</S.Name>
        <S.SocialList>

          {socialItemData.map((s, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.title}
                >
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
        <S.Copyright>
          © {new Date().getFullYear()} {t.footer.rights}
        </S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};

export default Footer;
