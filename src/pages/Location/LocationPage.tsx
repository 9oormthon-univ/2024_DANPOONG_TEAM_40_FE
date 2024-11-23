import { useEffect } from "react";
import * as L from "./LocationPage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import Button from "../../components/Button";
import elevator from "../../assets/icon/icon_elevator.svg";
import escalator from "../../assets/icon/icon_escalator.svg";
import wheelchair from "../../assets/icon/icon_wheelchair2.svg";
import Search from "../../components/Search";
declare global {
  interface Window {
    kakao: any;
  }
}

const LocationPage = (): JSX.Element => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APPKEY}&autoload=false&libraries=services`;
    script.async = true;

    script.onload = () => {
      console.log("카카오맵 스크립트 로드 완료");

      // 카카오맵 객체 확인
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오맵 객체가 로드되지 않았습니다.");
        return;
      }

      const kakao = window.kakao;
      console.log("카카오 객체:", kakao);

      kakao.maps.load(() => {
        console.log("카카오맵 로드 완료");

        // 지도 컨테이너 설정
        const container = document.getElementById("map");
        if (!container) {
          console.error("지도 컨테이너를 찾을 수 없습니다.");
          return;
        }

        // 지도 옵션 설정
        const options = {
          center: new kakao.maps.LatLng(37.5665, 126.9780), // 기본 좌표 (서울)
          level: 4,
        };

        try {
          const map = new kakao.maps.Map(container, options);
          console.log("지도 객체 생성 성공:", map);

          // 현재 위치 가져오기
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log("현재 위치 가져오기 성공:", position);
                const { latitude, longitude } = position.coords;
                const currentPosition = new kakao.maps.LatLng(
                  latitude,
                  longitude
                );
                console.log("현재 위치 좌표:", currentPosition);

                // 지도 중심 이동 및 마커 추가
                map.setCenter(currentPosition);
                new kakao.maps.Marker({
                  map: map,
                  position: currentPosition,
                });
              },
              (error) => {
                console.error("현재 위치를 가져오지 못했습니다:", error);
                alert("현재 위치를 가져올 수 없습니다.");
              }
            );
          } else {
            console.warn("브라우저가 Geolocation을 지원하지 않습니다.");
          }
        } catch (error) {
          console.error("지도 생성 중 오류 발생:", error);
        }
      });
    };

    script.onerror = () => {
      console.error("카카오맵 스크립트를 로드하는 데 실패했습니다.");
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      console.log("카카오맵 스크립트 제거");
      document.head.removeChild(script);
    };
  }, []);

  return (
    <L.Container style={{position:"relative"}}>
      <div id="map" style={{ width: "100%", height: "900px", position: "relative"}} />
      <div className="absolute w-full z-10"
      >
        <TitleLine title={"모두의 길"} />
        <div className=" flex justify-center items-center m-auto">
          {/* 장소, 지하철역,주소 검색 컴포넌트  */}
          <Search onfocus={()=>{}} />
        </div>
        <div className="flex justify-center space-x-2 py-10">
          <Button 
            icon={elevator}
            label="엘리베이터"
            onClick = {() => console.log("엘리베이터 클릭")}
            className="hover:bg-[#FFD95C] active:bg-[#FFD95C]"
            />
          <Button 
            icon={escalator}
            label="에스컬레이터"
            onClick = {() => console.log("엘리베이터 클릭")}
            className="hover:bg-[#AED8F4] active:bg-[#AED8F4]"
            />
          <Button 
            icon={wheelchair}
            label="휠체어 리프트"
            onClick = {() => console.log("엘리베이터 클릭")}
            className="hover:bg-[#F69D9D] active:bg-[#F69D9D]"
            />
        </div>
      </div>
      <Tabbar />
    </L.Container>
  );
};

export default LocationPage;
