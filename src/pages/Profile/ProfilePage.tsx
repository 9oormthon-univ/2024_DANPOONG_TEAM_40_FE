import * as P from "./ProfilePage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import Stamp from "./components/Stamp";

import nextIcon from "../../assets/icon/icon_next.svg";
import reviewIcon from "../../assets/icon/icon_profile_review.svg";
import ReviewItem from "./components/ReviewItem";

const ProfilePage = () => {
  const name = "햄스터";
  const review = [
    {
      placeName: "앤티크커피",
      date: "2024.11.05",
      review:
        "너무 맛있고 직원분들도 정말 친절해요! 다음에 친구들이랑 꼭 다시 방문하고 싶어요! 작성한 리뷰가 길어지면 이렇게 생략됩니다~~~",
    },
    {
      placeName: "앤티크커피",
      date: "2024.11.15",
      review:
        "너무 맛있고 직원분들도 정말 친절해요! 다음에 친구들이랑 꼭 다시 방문하고 싶어요! 작성한 리뷰가 길어지면 이렇게 생략됩니다~~~",
    },
    {
      placeName: "앤티크커피",
      date: "2024.11.15",
      review:
        "너무 맛있고 직원분들도 정말 친절해요! 다음에 친구들이랑 꼭 다시 방문하고 싶어요! 작성한 리뷰가 길어지면 이렇게 생략됩니다~~~",
    },
  ];

  return (
    <P.Container>
      <TitleLine title={"내 프로필"} />
      <P.Profile>
        <P.ProfileImage />
        <P.ProfileSub>
          <P.ProfileName>
            <p>{name}</p>
            <img src={nextIcon} alt="next" />
          </P.ProfileName>
          <P.ProfileReview>
            <img src={reviewIcon} alt="review" />
            <p>리뷰 1개</p>
          </P.ProfileReview>
        </P.ProfileSub>
      </P.Profile>
      <Stamp />
      <P.ReviewContainer>
        <h1>
          <span>{name}</span> 님의 리뷰
        </h1>
        {review.map((item, index) => (
          <ReviewItem key={index} review={item} />
        ))}
      </P.ReviewContainer>
      <Tabbar />
    </P.Container>
  );
};

export default ProfilePage;
