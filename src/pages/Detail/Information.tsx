import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

// 아이콘
import timeIcon from "../../assets/icon/icon_time.svg";
import callIcon from "../../assets/icon/icon_call.svg";
import serviceIcon from "../../assets/icon/icon_service.svg";
import wheelchairIcon from "../../assets/icon/icon_wheelchair.svg";
import toiletIcon from "../../assets/icon/icon_toilet.svg";

interface PlaceData {
  name: string;
  tel: string;
  time: string;
}

const Information = () => {
  const { id } = useParams<{ id: string }>();
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await axios.get(
          `http://3.37.95.121:3000/places/search/${id}`
        );
        setPlaceData(response.data.data);
      } catch (err) {
        console.error("장소 정보를 가져오는 데 실패했습니다.", err);
        setError("장소 정보를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPlaceDetails();
    }
  }, [id]);

  const formatTime = (time: string): string[] => {
    // 정규식으로 한글 전후로 줄바꿈 분리
    return time.split(/(?<=\s)(?=[가-힣])/);
  };

  if (loading) {
    return <Container>로딩 중...</Container>;
  }

  if (error || !placeData) {
    return <Container>{error || "장소 정보를 불러올 수 없습니다."}</Container>;
  }

  const { time, tel } = placeData;

  return (
    <Container>
      <TimeTitle>
        <img src={timeIcon} alt="time" />
        <p>영업시간</p>
      </TimeTitle>
      <Time>
        {formatTime(time).map((t, index) => (
          <p key={index}>{t}</p>
        ))}
      </Time>
      <Call>
        <img src={callIcon} alt="call" />
        <p>{tel || "전화번호 정보 없음"}</p>
      </Call>
      <ServiceTitle>
        <img src={serviceIcon} alt="service" />
        <p>제공 서비스</p>
      </ServiceTitle>
      <ServiceContainer>
        <Service>
          <img src={wheelchairIcon} alt="wheelchair" />
          <p>
            출입구 휠체어
            <br />
            이용가능
          </p>
        </Service>
        <Service>
          <img src={wheelchairIcon} alt="wheelchair" />
          <p>
            좌석 휠체어
            <br />
            이용가능
          </p>
        </Service>
        <Service>
          <img src={toiletIcon} alt="toilet" />
          <p>
            장애인 화장실
            <br />
            이용가능
          </p>
        </Service>
      </ServiceContainer>
    </Container>
  );
};

export default Information;

// style
const Container = styled.div`
  width: 100%;
  padding: 10px 30px;

  font-size: 13px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TimeTitle = styled.div`
  display: flex;
  gap: 6px;

  font-family: "NanumSquareNeoExtraBold";
`;

const Time = styled.div`
  margin-bottom: 10px;

  p {
    padding: 0px 25px;
  }
`;

const Call = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 10px;
`;

const ServiceTitle = styled.div`
  display: flex;
  gap: 6px;

  font-family: "NanumSquareNeoExtraBold";
`;

const ServiceContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 30px;
`;

const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;

  font-size: 10px;

  img {
    height: 30px;
  }
`;
