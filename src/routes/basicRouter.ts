import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import LoginRedirectPage from "../pages/Login/LoginRedirectPage";
import LocationPage from "../pages/Location/LocationPage";
import RecommendPage from "../pages/Recommend/RecommendPage";
import SavePage from "../pages/Save/SavePage";
import ProfilePage from "../pages/Profile/ProfilePage";
import DetailPage from "../pages/Detail/DetailPage";
import ReviewPage from "../pages/Detail/ReviewPage";
import { TRoute } from "../types/commonTypes";
import SearchPage from "../pages/Home/SearchPage";

export const BASIC_ROUTES_URL = {
  home: {
    name: "홈페이지",
    path: () => "/",
    component: HomePage,
  },
  login: {
    name: "로그인",
    path: () => "/login",
    component: LoginPage,
  },
  auth: {
    name: "로그인 리다이렉트",
    path: () => "/auth",
    component: LoginRedirectPage,
  },
  location: {
    name: "내 주변",
    path: () => "/location",
    component: LocationPage,
  },
  recommend: {
    name: "추천",
    path: () => "/recommend",
    component: RecommendPage,
  },
  save: {
    name: "저장",
    path: () => "/save",
    component: SavePage,
  },
  profile: {
    name: "프로필",
    path: () => "/profile",
    component: ProfilePage,
  },
  detail: {
    name: "상세",
    path: () => "/detail/:id",
    component: DetailPage,
  },
  review: {
    name: "리뷰",
    path: () => "/review/:id",
    component: ReviewPage,
  },
  search: {
    name: "검색",
    path: () => "/search",
    component: SearchPage,
  },
} as const;
export const BASIC_ROUTES: TRoute[] = Object.values(BASIC_ROUTES_URL);
