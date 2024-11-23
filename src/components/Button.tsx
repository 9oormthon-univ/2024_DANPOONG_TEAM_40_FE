import React from "react";

interface ButtonProps {
  icon: string; // 버튼에 표시할 아이콘 (이미지 URL)
  label: string; // 버튼에 표시할 텍스트
  onClick: () => void; // 버튼 클릭 시 호출할 함수
  className?: string; // 추가적인 TailwindCSS 또는 custom class
  isActive?: boolean; // 버튼 활성화 상태
  activeClassName?: string; // 활성 상태일 때의 추가 클래스
}

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  onClick,
  className = "",
  isActive = false,
  activeClassName = "",
}) => {
  return (
    <div>
      <div
        onClick={onClick}
        className={`flex flex-row items-center px-[17px] py-[12px] rounded-full cursor-pointer ${
          isActive ? activeClassName : "bg-[#EFEFEF]"
        } ${className} space-x-1 shadow-inner border border-[#EEEEEE] text-center justify-center items-center`}
      >
        <div className="flex flex-row justify-center items-center space-x-1">
          <img src={icon} alt="button icon" className="w-[13px] h-[13px] mr-1" />
          <span className="text-sm font-NanumSquareNeo font-bold text-[12px] text-center">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default Button;
