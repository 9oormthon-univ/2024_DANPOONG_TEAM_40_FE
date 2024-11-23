/*global kakao */
import { useEffect, useState } from "react";
import * as L from "./LocationPage.style";
import Tabbar from "../../components/Tabbar";
import TitleLine from "../../components/TitleLine";
import Button from "../../components/Button";
import elevator from "../../assets/icon/icon_elevator.svg";
import wheelchair from "../../assets/icon/icon_wheelchair2.svg";
import Search from "../../components/Search";
import { $axios } from "../../lib/axios";

declare global {
  interface Window {
    kakao: any;
  }
}

const LocationPage = (): JSX.Element => {
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any[]>([]); // 마커 상태 관리
  const [selectedType, setSelectedType] = useState<string | null>(null); // 선택된 버튼 타입

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APPKEY}&autoload=false&libraries=services`;
    script.async = true;

    script.onload = () => {
      console.log("카카오맵 스크립트 로드 완료");

      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오맵 객체가 로드되지 않았습니다.");
        return;
      }

      const kakao = window.kakao;
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        if (!container) {
          console.error("지도 컨테이너를 찾을 수 없습니다.");
          return;
        }

        const options = {
          center: new kakao.maps.LatLng(37.3515795, 127.0717799), // 기본 좌표 (서울)
          level: 8,
        };

        const createdMap = new kakao.maps.Map(container, options);
        console.log("지도 객체 생성 성공:", createdMap);

        setMap(createdMap); // 지도 객체 상태 저장

        // 현재 위치 가져오기
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              console.log("현재 위치 가져오기 성공:", position);
              const { latitude, longitude } = position.coords;
              const currentPosition = new kakao.maps.LatLng(latitude, longitude);
              createdMap.setCenter(currentPosition);

              new kakao.maps.Marker({
                map: createdMap,
                position: currentPosition,
              });
            },
            (error) => {
              console.error("현재 위치를 가져오지 못했습니다:", error);
              alert("현재 위치를 가져올 수 없습니다.");
            }
          );
        }
      });
    };

    script.onerror = () => {
      console.error("카카오맵 스크립트를 로드하는 데 실패했습니다.");
    };

    document.head.appendChild(script);

    return () => {
      console.log("카카오맵 스크립트 제거");
      document.head.removeChild(script);
    };
  }, []);

  // 마커 초기화 함수
  const clearMarkers = () => {
    markers.forEach((marker) => marker.setMap(null)); // 지도에서 모든 마커 제거
    setMarkers([]); // 상태 초기화
  };

  // 마커 추가 함수
  const addMarkers = (coordinates: { lat: number; lng: number; title: string }[]) => {
    if (!map) return;

    const kakao = window.kakao;
    clearMarkers(); // 기존 마커 제거

    const newMarkers = coordinates.map((coord) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(coord.lat, coord.lng),
        title: coord.title, // hover 시 표시될 title
      });
      return marker;
    });

    setMarkers(newMarkers); // 새로운 마커 상태 저장
  };

  // API 호출 함수
  const fetchNearbyFacilities = async (type: string) => {
    if (!map) return;

    setSelectedType(type); // 선택된 버튼 타입 설정

    try {
      const response = await $axios.get("/around/nearby", {
        params: {
          type,
          lat: map.getCenter().getLat(), // 현재 지도 중심의 위도
          lon: map.getCenter().getLng(), // 현재 지도 중심의 경도
        },
      });

      console.log(`${type} 정보:`, response.data);

      // 응답 데이터를 기반으로 dummy title 추가
      const coordinates = response.data.data.map((item: any) => ({
        lat: item.node_wkt.coordinates[1],
        lng: item.node_wkt.coordinates[0],
        title: item.title || "Unknown Location", // title 기본값
      }));

      addMarkers(coordinates); // 새 마커 추가
    } catch (error) {
      console.error(`${type} 정보를 가져오는 데 실패했습니다:`, error);
    }
  };

  return (
    <L.Container style={{ position: "relative" }}>
      <div id="map" style={{ width: "100%", height: "900px", position: "relative" }} />
      <div className="absolute w-full z-10">
        <TitleLine title={"모두의 길"} />
        <div className="flex justify-center items-center m-auto">
          <Search onfocus={() => {}} />
        </div>
        <div className="flex justify-center space-x-2 py-10">
          <Button
            icon={elevator}
            label="엘리베이터"
            onClick={() => fetchNearbyFacilities("elevator")}
            isActive={selectedType === "elevator"}
            activeClassName="bg-[#FFD95C]"
          />
          <Button
            icon={wheelchair}
            label="휠체어 리프트"
            onClick={() => fetchNearbyFacilities("lift")}
            isActive={selectedType === "lift"}
            activeClassName="bg-[#F69D9D]"
          />
        </div>
      </div>
      <Tabbar />
    </L.Container>
  );
};

export default LocationPage;
