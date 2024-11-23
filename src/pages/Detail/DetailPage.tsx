import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import * as D from "./DetailPage.style";
import Information from "./Information";
import Review from "./Review";
import Modal from "../../components/Modal";
import SaveModal from "./components/SaveModal";

// image
import backIcon from "../../assets/icon/icon_back.svg";
import heartIcon from "../../assets/icon/icon_heart.svg";
import heartFillIcon from "../../assets/icon/icon_heart_fill.svg";
import addressIcon from "../../assets/icon/icon_address.svg";

interface PlaceDetail {
  id: string;
  name: string;
  subName: string;
  desc: string;
  address: string;
  point: string;
  lat: string;
  lon: string;
  time: string;
  image?: string; // 추천 페이지에서 받은 이미지
}

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<"정보" | "리뷰">("정보");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [place, setPlace] = useState<PlaceDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 추천 페이지에서 전달된 데이터
  const stateData = location.state as {
    image: string;
  };

  useEffect(() => {
    const fetchPlaceDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://3.37.95.121:3000/places/search/${id}`
        );
        setPlace({
          ...response.data.data,
          image: stateData?.image || response.data.data.image, // 전달받은 이미지가 있으면 사용
        });
      } catch (err) {
        setError("장소 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceDetail();
  }, [id, stateData]);

  if (loading) {
    return <D.Container>로딩 중...</D.Container>;
  }

  if (error || !place) {
    return (
      <D.Container>{error || "해당 장소를 찾을 수 없습니다."}</D.Container>
    );
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <D.Container>
      <D.Title>{place.name}</D.Title>
      <D.Image src={place.image} alt={place.name} />
      <D.TagContainer>
        <D.Tag>{place.subName}</D.Tag>
      </D.TagContainer>
      <D.Name>{place.name}</D.Name>
      <D.Address>
        <img src={addressIcon} alt="address" />
        {place.address}
      </D.Address>
      <D.Back type="button" onClick={handleBackClick}>
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
