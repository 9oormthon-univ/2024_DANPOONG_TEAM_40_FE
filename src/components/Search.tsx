import search from "../assets/icon/icon_search.svg";
import mic from "../assets/icon/icon_mic.svg";

const Search = () => {
  return (
        <div className="m-10 justify-center items-center mx-4 max-w-[333px] h-[40px]
        w-full">
        <div className="flex items-center bg-white rounded-full shadow-inner p-[12px] w-full">
        <div className="flex flex-row justify-between items-center space-between w-full">
          <div className="flex flex-row justify-center items-center">
            <img src={search} alt="Search" className="w-15 h-15 mr-10" />
            <input
                type="text"
                placeholder="장소, 지하철역, 주소 검색"
                className="flex-row outline-none text-[#A2A2A2] font-NanumSquareNeo font-bold text-[15px]
                placeholder-[#A2A2A2]"
            />
          </div>
            <img src={mic} alt="Mic" className="w-15 h-15 ml-2" />
        </div>
        </div>
    </div>
  );
};

export default Search;
