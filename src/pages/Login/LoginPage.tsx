import React from "react";
import * as L from "./LoginPage.style";
import TitleLine from "./TitleLine";

// image
import modumong from "../../assets/modumong.svg";
import kakaoLogin from "../../assets/kakao_login.svg";

const LoginPage = () => {
  return (
    <L.Container>
      <L.Image src={modumong} alt="modumong" />
      <TitleLine title={"모두의 길"} />
      <L.KakaoLogin src={kakaoLogin} alt="kakaoLogin" />
      <L.Login>비회원으로 시작하기</L.Login>
    </L.Container>
  );
};

export default LoginPage;
