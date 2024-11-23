import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Subway 이미지 컨테이너 (relative)
export const SubwayMapContainer = styled.div`
  position: relative;
  width: 100%; 
  max-width: 353px;
`;

// Subway 이미지
export const SubwayImage = styled.img`
  width: 100%; 
  height: auto;
`;

// Marker 이미지
export const MarkerImage = styled.img<{ top: number; left: number }>`
  position: absolute; /* SubwayMapContainer 기준 */
  top: ${({ top }) => top}%; /* 위치: 위에서부터 퍼센트 기준 */
  left: ${({ left }) => left}%; /* 위치: 왼쪽에서부터 퍼센트 기준 */
  transform: translate(-50%, -50%); /* 이미지 중심점 정렬 */
  width: 24px; /* 마커 크기 */
  height: 24px;
`;

// 최근 방문 텍스트
export const RecentVisitTitle = styled.span`
  font-size: 14px;
  font-weight: bold;
  position: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 8px;
  margin-bottom: 8px; /* 제목과 목록 간 여백 */
`;
