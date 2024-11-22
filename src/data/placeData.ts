// 장소 상세 페이지

export interface Place {
  name: string;
  image: string;
  tags: string[];
  address: string;
}

export const places: Place[] = [
  {
    name: "공원",
    image: "https://via.placeholder.com/300?text=Park", // 테스트용 이미지
    tags: ["자연", "휴식"],
    address: "서울특별시 공원구 123",
  },
  {
    name: "카페",
    image: "https://via.placeholder.com/300?text=Cafe",
    tags: ["음료", "디저트"],
    address: "서울특별시 카페구 456",
  },
  {
    name: "박물관",
    image: "https://via.placeholder.com/300?text=Museum",
    tags: ["문화", "역사"],
    address: "서울특별시 박물관구 789",
  },
  {
    name: "앤티크커피",
    image: "https://via.placeholder.com/300?text=Cafe",
    tags: ["카페", "디저트"],
    address: "서울 송파구 백제고분로41길 21-16 1층 앤티크커피 잠실점",
  },
];
