import React from "react";
import Icon from "../../../../components/Icon/icon";
import FlexWrapper from "../../../../components/FlexWrapper";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction={"column"} align={"center"}>

        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>

        <S.SkillTitle>{props.title}</S.SkillTitle>
        <S.SkillText>{props.description}</S.SkillText>
        
      </FlexWrapper>
    </S.Skill>
  );
};

export default Skill;
