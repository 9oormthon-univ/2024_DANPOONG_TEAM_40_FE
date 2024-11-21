import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as T from "./Tabbar.style";
import TabbarItem from "./TabbarItem";

// image
import locationIcon from "../assets/icon/icon_location.svg";
import recommendIcon from "../assets/icon/icon_recommend.svg";
import saveIcon from "../assets/icon/icon_save.svg";
import profileIcon from "../assets/icon/icon_profile.svg";
import homeIcon from "../assets/icon/icon_modumong.svg";
import locationIconFill from "../assets/icon/icon_location_fill.svg";
import recommendIconFill from "../assets/icon/icon_recommend_fill.svg";
import saveIconFill from "../assets/icon/icon_save_fill.svg";
import profileIconFill from "../assets/icon/icon_profile_fill.svg";

const Tabbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      id: "location",
      icon: locationIcon,
      iconActive: locationIconFill,
      title: "내 주변",
      path: "/location",
    },
    {
      id: "recommend",
      icon: recommendIcon,
      iconActive: recommendIconFill,
      title: "추천",
      path: "/recommend",
    },
    {
      id: "home",
      icon: homeIcon,
      iconActive: homeIcon,
      title: "홈",
      isHome: true,
      path: "/",
    },
    {
      id: "save",
      icon: saveIcon,
      iconActive: saveIconFill,
      title: "저장",
      path: "/save",
    },
    {
      id: "profile",
      icon: profileIcon,
      iconActive: profileIconFill,
      title: "프로필",
      path: "/profile",
    },
  ];

  const handleTabClick = (path?: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <T.Container>
      <T.TabbarContainer>
        {tabs.map((tab) =>
          tab.isHome ? (
            <T.HomeIcon
              key={tab.id}
              type="button"
              onClick={() => handleTabClick(tab.path)}
            >
              <img src={tab.icon} alt={tab.title} />
            </T.HomeIcon>
          ) : (
            <TabbarItem
              key={tab.id}
              icon={location.pathname === tab.path ? tab.iconActive : tab.icon} // 현재 경로와 비교
              title={tab.title}
              isActive={location.pathname === tab.path} // 활성화 여부
              onClick={() => handleTabClick(tab.path)}
            />
          )
        )}
      </T.TabbarContainer>
      <T.HomeBorder />
    </T.Container>
  );
};

export default Tabbar;
