import React from "react";
import * as T from "./TabbarItem.style";

interface TabbarItemProps {
  icon: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const TabbarItem: React.FC<TabbarItemProps> = ({
  icon,
  title,
  isActive,
  onClick,
}) => {
  return (
    <T.Button type="button" onClick={onClick}>
      <T.Icon src={icon} alt={`${title} icon`} />
      <T.Label isActive={isActive}>{title}</T.Label>
    </T.Button>
  );
};

export default TabbarItem;
