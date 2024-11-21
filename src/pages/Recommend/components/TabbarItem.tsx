import React from "react";
import * as T from "./TabbarItem.style";

interface TabbarItemProps {
  icon: string;
  title: string;
}

const TabbarItem: React.FC<TabbarItemProps> = ({ icon, title }) => {
  return (
    <T.Button type="button">
      <T.Icon src={icon} alt={`${title} icon`} />
      <T.Label>{title}</T.Label>
    </T.Button>
  );
};

export default TabbarItem;
