import { createContext, useState } from "react";

const ModalContext = createContext<any>({
  modalOpen: false,
  setModalOpen: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [postOpen, setPostOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        postOpen,
        setPostOpen,
        alertOpen,
        setAlertOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
