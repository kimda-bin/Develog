import Dropdown from "./dropdown";
import GrobalStyle from "./globalStyle";
import Header from "./header";
import Login from "./login";
import Modal from "./modal";
import MyPage from "./mypage";
import Password from "./password";
import StatisticsView from "./statistics-view";
import { ModalProvider } from "./store/modal-context";
import { UserProvider } from "./store/user-context";

function App() {
  return (
    <>
      <GrobalStyle />
      <UserProvider>
        <ModalProvider>
          <Header />
          <MyPage />
        </ModalProvider>
      </UserProvider>
    </>
    //<Header />
    //<Password />
  );
}

export default App;
