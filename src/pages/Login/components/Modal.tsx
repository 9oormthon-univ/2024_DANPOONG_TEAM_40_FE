import { ReactNode } from "react";
import * as M from "./Modal.style";

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <M.Background>
      <M.Container>{children}</M.Container>
    </M.Background>
  );
};

export default Modal;
