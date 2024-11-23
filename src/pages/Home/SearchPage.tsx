import styled from "styled-components";
import Search from "../../components/Search";
import Tabbar from "../../components/Tabbar";
import SearchItem from "./components/SearchItem";

const SearchPage = () => {
  return (
    <Container>
      <Search onfocus={() => {}} />
      <SearchItem
        name={"오베흐트도넛"}
        address={"서울 중구 퇴계로10길 34 1층 오베흐트"}
      />
      <Tabbar />
    </Container>
  );
};

export default SearchPage;

// style
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background-color: #faf9f1;
  font-family: "NanumSquareNeoBold";
  color: #282828;

  input {
  autoFocus = true;}
`;
