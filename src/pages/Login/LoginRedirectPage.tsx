import React, { useState } from "react";
import * as L from "./LoginRedirectPage.style";

import Modal from "./components/Modal";
import PictureModal from "./components/PictureModal";
import LoginComplete from "./LoginComplete";

// image
import camera from "../../assets/icon/camera.svg";

const LoginRedirectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleComplete = () => {
    if (nickname.length > 0) {
      setIsComplete(true);
    }
  };

  if (isComplete) {
    return <LoginComplete />;
  }

  return (
    <L.Container>
      <L.GuideLabel>
        반가워요!
        <br />
        <span>프로필</span>을 설정해 주세요.
      </L.GuideLabel>
      <L.Profile type="button" onClick={openModal}>
        <img src={camera} alt="select photo" />
      </L.Profile>
      <L.NicknameInput
        placeholder="닉네임을 입력해 주세요."
        value={nickname}
        onChange={handleNicknameChange}
      />
      <L.Button
        type="button"
        isActive={nickname.length > 0}
        onClick={handleComplete}
      >
        완료
      </L.Button>

      <Modal isOpen={isModalOpen}>
        <PictureModal onClose={closeModal} />
      </Modal>
    </L.Container>
  );
};
export default LoginRedirectPage;
