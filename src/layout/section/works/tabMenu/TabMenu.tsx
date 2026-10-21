import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";

export type TabsStatusType = "all" | "web" | "site" | "cms";

type TabMenuPropsType = {
  tabsItems: Array<{
    status: TabsStatusType;
    title: string;
  }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: TabsStatusType;
};

const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item) => {
          return (
            <ListItem key={item.status}>
              <Link
                $active={props.currentFilterStatus === item.status}
                as={"button"}
                type={"button"}
                onClick={() => {
                  props.changeFilterStatus(item.status);
                }}
              >
                {item.title}
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 30px;
    max-width: 600px;
    width: 100%;
    margin: 0 auto 40px;
  }
`;
const ListItem = styled.li``;

export default TabMenu;
