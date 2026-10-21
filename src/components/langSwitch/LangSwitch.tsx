import React from "react";
import styled from "styled-components";
import theme from "../../styles/Theme";
import { useLanguage } from "../../i18n/LanguageContext";

const LangSwitch: React.FC = () => {
  const { t, toggleLang } = useLanguage();

  return (
    <StyledLangSwitch
      type={"button"}
      onClick={toggleLang}
      aria-label={t.langSwitch.ariaLabel}
    >
      {t.langSwitch.label}
    </StyledLangSwitch>
  );
};

const StyledLangSwitch = styled.button`
  font-family: ${theme.fonts.title};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  min-width: 46px;
  padding: 8px 10px 6px;
  border: 1px solid ${theme.colors.accent};
  transition: ${theme.animations.transition};

  &:hover {
    background-color: ${theme.colors.accent};
  }
`;

export default LangSwitch;
