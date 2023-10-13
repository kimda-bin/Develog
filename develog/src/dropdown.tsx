import styled from "styled-components";
import "./fonts/Font.css";
import UserContext from "./store/user-context";
import { useContext } from "react";

const _Ul = styled.ul`
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 5px;
  width: 70px;
  height: 40px;
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

const _LogoutList = styled(_List)`
  border-top: 1px solid #ccc;
  padding-top: 7px;
  color: red;
`;

export default function Dropdown() {
  const isLoginValue = useContext(UserContext);

  const Logout = () => {
    isLoginValue.setIsLogin(false);
    isLoginValue.setIsOpenDropdown(false);
  };
  return (
    <div>
      <_Ul>
        <_List>마이페이지</_List>
        <_LogoutList onClick={() => Logout()}>로그아웃</_LogoutList>
      </_Ul>
    </div>
  );
}
