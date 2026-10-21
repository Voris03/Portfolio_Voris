import React from "react";
import { S } from "./../HeaderMenu_Styles";
import { useLanguage } from "../../../../i18n/LanguageContext";
import { TranslationsType } from "../../../../i18n/translations";

const items: Array<{ key: keyof TranslationsType["menu"]; href: string }> = [
  {
    key: "home",
    href: "home",
  },
  {
    key: "skills",
    href: "skills",
  },
  {
    key: "works",
    href: "works",
  },
  {
    key: "testimony",
    href: "testimony",
  },
  {
    key: "contact",
    href: "contact",
  },
];

export const Menu: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ul>
      {items.map((item, index: number) => {
        const title = t.menu[item.key];
        return (
          <S.MenuItem key={index}>
            <S.NavLink
              to={item.href}
              smooth={true}
              activeClass="active"
              spy={true}
              offset={10}
            >
              {title}
              <S.Mask>
                <span>{title}</span>
              </S.Mask>
              <S.Mask>
                <span>{title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
