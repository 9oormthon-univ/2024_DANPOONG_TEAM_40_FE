import { useNavigate } from "react-router-dom";
import * as L from "./LoginPage.style";
import TitleLine from "../../components/TitleLine";

// image
import modumong from "../../assets/modumong.svg";
import kakaoLogin from "../../assets/kakao_login.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/");
  };

  const handleKakaoLogin = () => {
    navigate("/auth");
  };

  return (
    <L.Container>
      <L.Image src={modumong} alt="modumong" />
      <TitleLine title={"모두의 길"} />
      <button type="button" onClick={handleKakaoLogin}>
        <L.KakaoLogin src={kakaoLogin} alt="kakaoLogin" />
      </button>
      <L.Login type="button" onClick={handleGuestLogin}>
        비회원으로 시작하기
      </L.Login>
    </L.Container>
  );
};

export default LoginPage;
