import GrobalStyle from "./globalStyle";
import Header from "./header";
import Login from "./login";
import Modal from "./modal";
import Password from "./password";
import { ModalProvider } from "./store/modal-context";

function App() {
  return (
    <>
      <GrobalStyle />
      <ModalProvider>
        <Header />
      </ModalProvider>
    </>
    //<Header />
    //<Password />
  );
}

export default App;
