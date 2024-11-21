import React from "react";
import * as T from "./Tabbar.style";
import TabbarItem from "./TabbarItem";

// image
import locationIcon from "../../../assets/icon/icon_location.svg";
import recommendIcon from "../../../assets/icon/icon_recommend.svg";
import saveIcon from "../../../assets/icon/icon_save.svg";
import profileIcon from "../../../assets/icon/icon_profile.svg";
import homeIcon from "../../../assets/icon/icon_modumong.svg";

const Tabbar = () => {
  return (
    <T.Container>
      <T.TabbarContainer>
        <TabbarItem icon={locationIcon} title="내 주변" />
        <TabbarItem icon={recommendIcon} title="추천" />
        <T.HomeIcon type="button">
          <img src={homeIcon} alt="home" />
        </T.HomeIcon>
        <TabbarItem icon={saveIcon} title="저장" />
        <TabbarItem icon={profileIcon} title="프로필" />
      </T.TabbarContainer>
      <T.HomeBorder />
    </T.Container>
  );
};

export default Tabbar;
