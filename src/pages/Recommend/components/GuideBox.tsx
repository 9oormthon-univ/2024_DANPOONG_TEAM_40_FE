import React, { ReactNode } from "react";
import * as G from "./GuideBox.style";

interface GuideBoxProps {
  children: ReactNode;
}
const GuideBox: React.FC<GuideBoxProps> = ({ children }) => {
  return (
    <G.Container>
      <G.GuideMsg>{children}</G.GuideMsg>
    </G.Container>
  );
};

export default GuideBox;
