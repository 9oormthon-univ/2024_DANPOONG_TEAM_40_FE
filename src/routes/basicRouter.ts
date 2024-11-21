import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import LoginRedirectPage from "../pages/Login/LoginRedirectPage";
import LocationPage from "../pages/Location/LocationPage";
import RecommendPage from "../pages/Recommend/RecommendPage";
import SavePage from "../pages/Save/SavePage";
import ProfilePage from "../pages/Profile/ProfilePage";
import { TRoute } from "../types/commonTypes";

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
} as const;
export const BASIC_ROUTES: TRoute[] = Object.values(BASIC_ROUTES_URL);
