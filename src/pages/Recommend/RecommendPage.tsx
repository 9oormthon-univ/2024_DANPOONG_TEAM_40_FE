import { useEffect, useState } from "react";
import axios from "axios";
import * as R from "./RecommendPage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import GuideBox from "./components/GuideBox";
import { RecommendItem } from "./components/RecommendItem";

interface Place {
  id: number;
  name: string;
  imageUrl: string;
  tags?: string[];
}

interface MonthlyMessage {
  icon: string;
  title: string;
  message: string;
}

interface RecommendData {
  message: string;
  data: Place[];
  monthlyMessage: MonthlyMessage;
}

const RecommendPage = (): JSX.Element => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [monthlyMessage, setMonthlyMessage] = useState<MonthlyMessage | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const month = new Date().getMonth() + 1;

  useEffect(() => {
    const fetchRecommendData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<RecommendData>(
          `http://3.37.95.121:3000/recommend/${month}`
        );
        const { data, monthlyMessage } = response.data;

        setPlaces(data);
        setMonthlyMessage(monthlyMessage);
      } catch (err) {
        setError("추천 데이터를 불러오는 데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendData();
  }, [month]);

  if (loading) {
    return <R.Container>로딩 중...</R.Container>;
  }

  if (error) {
    return <R.Container>{error}</R.Container>;
  }

  if (!monthlyMessage) {
    return <R.Container>데이터가 없습니다.</R.Container>;
  }

  return (
    <R.Container>
      <TitleLine
        title={`${monthlyMessage.icon} ${monthlyMessage.title} ${monthlyMessage.icon}`}
      />
      <GuideBox>{monthlyMessage.message}</GuideBox>
      {places.map((place) => (
        <RecommendItem
          key={place.id}
          id={place.id}
          icon={monthlyMessage.icon}
          placeName={place.name}
          tags={place.tags || []}
          image={place.imageUrl}
        />
      ))}
      <Tabbar />
    </R.Container>
  );
};

export default RecommendPage;
