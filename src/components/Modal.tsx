import { ReactNode } from "react";
import * as M from "./Modal.style";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <M.Background>
      <M.Container>{children}</M.Container>
    </M.Background>
  );
};

export default Modal;
