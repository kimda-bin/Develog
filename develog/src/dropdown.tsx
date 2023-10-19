import styled from "styled-components";
import "./fonts/Font.css";
import UserContext from "./store/user-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ModalContext from "./store/modal-context";
import Alert from "./alert";

const _Ul = styled.ul`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 5px;
  width: 70px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family: "HakgyoansimWoojuR";
  position: fixed;
  margin-left: -50px;

  @keyframes dropdown {
    0% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: dropdown 0.4s ease;
`;

const _List = styled.li`
  list-style: none;
  font-size: 12px;
  font-weight: bold;
  width: 70px;
  display: flex;
  justify-content: center;
  padding-bottom: 7px;

  &:hover {
    cursor: pointer;
  }
`;

const _BackDrop = styled.div`
  z-index: 10;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
`;

const _LogoutList = styled(_List)`
  border-top: 1px solid #ccc;
  padding-top: 7px;
  color: red;
`;

const _SettingList = styled(_LogoutList)`
  color: black;
`;

export default function Dropdown() {
  const isLoginValue = useContext(UserContext);
  const AlertOpen = useContext(ModalContext);

  const navigate = useNavigate();

  const Logout = () => {
    isLoginValue.setIsLogin(false);
    isLoginValue.setIsOpenDropdown(false);
    navigate("/");
  };

  const mypage = () => {
    isLoginValue.setIsOpenDropdown(false);
    navigate("/mypage");
  };

  const setting = () => {
    isLoginValue.setIsOpenDropdown(false);
    navigate("/setting");
  };
  return (
    <>
      <div>
        <_Ul>
          <_List onClick={() => mypage()}>마이페이지</_List>
          <_SettingList onClick={() => setting()}>설정</_SettingList>
          <_LogoutList onClick={() => Logout()}>로그아웃</_LogoutList>
        </_Ul>
      </div>
    </>
  );
}
