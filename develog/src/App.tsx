import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentView from "./content-view";
import GrobalStyle from "./globalStyle";
import Header from "./header";
import Main from "./main";
import MainContent from "./main-content";
import MyPage from "./mypage";
import Post from "./post";
import { ModalProvider } from "./store/modal-context";
import { UserProvider } from "./store/user-context";
import Write from "./write";
import MypageSubscribe from "./mypage-subscribe";
import Statistic from "./statistics";
import Alert from "./alert";
import SettingPage from "./setting";
import ContentAthorView from "./content-athor-view";

function App() {
  return (
    <>
      <BrowserRouter>
        <GrobalStyle />
        <UserProvider>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/write" element={<Write />} />
              <Route path="/contentView" element={<ContentView />} />
              <Route path="/contentView2" element={<ContentAthorView />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/setting" element={<SettingPage />} />
            </Routes>
          </ModalProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
