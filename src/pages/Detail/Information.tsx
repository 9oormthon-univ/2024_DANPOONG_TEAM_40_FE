import styled from "styled-components";

// 아이콘
import timeIcon from "../../assets/icon/icon_time.svg";
import callIcon from "../../assets/icon/icon_call.svg";
import serviceIcon from "../../assets/icon/icon_service.svg";
import wheelchairIcon from "../../assets/icon/icon_wheelchair.svg";
import toiletIcon from "../../assets/icon/icon_toilet.svg";

const Information = () => {
  return (
    <Container>
      <TimeTitle>
        <img src={timeIcon} alt="time" />
        <p>영업시간</p>
      </TimeTitle>
      <Time>
        <p>00:00 ~ 00:00</p>
        <p>00:00 ~ 00:00</p>
      </Time>
      <Call>
        <img src={callIcon} alt="call" />
        <p>000-0000-0000</p>
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
