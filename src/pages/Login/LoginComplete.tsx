import { useNavigate } from "react-router-dom";
import * as L from "./LoginComplete.style";

const LoginComplete = () => {
  const navigate = useNavigate();

  const handleGuestLogin = () => {
    navigate("/");
  };

  return (
    <L.Container>
      <L.Title>가입 완료!</L.Title>
      <L.Subtitle>
        <span>모두의 길</span>로 초대합니다!
      </L.Subtitle>
      <L.Button type="button" onClick={handleGuestLogin}>
        홈 화면으로 이동하기
      </L.Button>
    </L.Container>
  );
};

export default LoginComplete;
