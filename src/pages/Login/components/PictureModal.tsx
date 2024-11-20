import * as P from "./PictureModal.style";

interface PictureModalProps {
  onClose: () => void;
}

const PictureModal: React.FC<PictureModalProps> = ({ onClose }) => {
  return (
    <P.Container>
      <P.Title>프로필 사진</P.Title>
      <P.Option type="button">카메라</P.Option>
      <P.Option type="button">앨범에서 선택</P.Option>
      <P.CancelButton type="button" onClick={onClose}>
        <P.Line />
        <P.Cancel>닫기</P.Cancel>
      </P.CancelButton>
    </P.Container>
  );
};

export default PictureModal;
