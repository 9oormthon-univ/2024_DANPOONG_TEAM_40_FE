import styled from "styled-components";

import stamp from "../../../assets/modumong_stamp.svg";
import stampFill from "../../../assets/modumong_stamp_fill.svg";

const StampItem = ({ isActive }: { isActive: boolean }) => {
  return (
    <Container>
      <img src={isActive ? stampFill : stamp} alt="stamp" />
    </Container>
  );
};

export default StampItem;

// style
const Container = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 40px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`;
