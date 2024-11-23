import { useState } from "react";
import { useParams } from "react-router-dom";
import * as D from "./DetailPage.style";
import Information from "./Information";
import Review from "./Review";
import Modal from "../../components/Modal";

// image
import backIcon from "../../assets/icon/icon_back.svg";
import heartIcon from "../../assets/icon/icon_heart.svg";
import heartFillIcon from "../../assets/icon/icon_heart_fill.svg";
import addressIcon from "../../assets/icon/icon_address.svg";

// 더미 데이터
import { places } from "../../data/placeData";
import SaveModal from "./components/SaveModal";

const DetailPage = () => {
  const { placeName } = useParams<{ placeName: string }>();
  const [activeMenu, setActiveMenu] = useState<"정보" | "리뷰">("정보");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const place = places.find((item) => item.name === placeName);

  if (!place) {
    return <h1>해당 장소를 찾을 수 없습니다.</h1>;
  }

  return (
    <D.Container>
      <D.Title>{place.name}</D.Title>
      <D.Image src={place.image} alt={place.name} />
      <D.TagContainer>
        {place.tags.map((tag, index) => (
          <D.Tag key={index}>{tag}</D.Tag>
        ))}
      </D.TagContainer>
      <D.Name>{place.name}</D.Name>
      <D.Address>
        <img src={addressIcon} alt="address" />
        {place.address}
      </D.Address>
      <D.Back type="button">
        <img src={backIcon} alt="back" />
      </D.Back>
      <D.Save type="button" onClick={() => setIsModalOpen(true)}>
        <img src={isSaved ? heartFillIcon : heartIcon} alt="save" />
      </D.Save>
      <D.Line />
      <D.MenuContainer>
        <D.Menu
          active={activeMenu === "정보"}
          onClick={() => setActiveMenu("정보")}
        >
          정보
        </D.Menu>
        <D.Menu
          active={activeMenu === "리뷰"}
          onClick={() => setActiveMenu("리뷰")}
        >
          리뷰
        </D.Menu>
      </D.MenuContainer>
      <D.Line />
      {activeMenu === "정보" ? <Information /> : <Review />}

      {/* 모달 추가 */}
      <Modal isOpen={isModalOpen}>
        <SaveModal
          onClose={() => setIsModalOpen(false)}
          onSave={() => {
            setIsSaved(true); // 하트 버튼 변경
            setIsModalOpen(false); // 모달 닫기
          }}
        />
      </Modal>
    </D.Container>
  );
};

export default DetailPage;
