import { createContext, useState } from "react";

const ModalContext = createContext<any>({
  modalOpen: false,
  setModalOpen: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
