import React, { useState } from "react";
import * as L from "./LoginRedirectPage.style";

// image
import camera from "../../assets/icon/camera.svg";
import Modal from "./components/Modal";
import PictureModal from "./components/PictureModal";

const LoginRedirectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <L.NicknameInput placeholder="닉네임을 입력해 주세요." />
      <L.Button type="button">완료</L.Button>

      <Modal isOpen={isModalOpen}>
        <PictureModal onClose={closeModal} />
      </Modal>
    </L.Container>
  );
};
export default LoginRedirectPage;
