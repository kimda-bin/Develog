import styled from "styled-components";
import "./fonts/Font.css";
import { useState, useContext } from "react";
import ModalGrobalStyle from "./globalStyle";
import Modal from "./modal";
import ModalContext from "./store/modal-context";
import logo from "./img/logo.png";
import profile from "./img/profile.jpg";
import UserContext from "./store/user-context";
import Dropdown from "./dropdown";

const _Flex = styled.div`
  display: flex;
  align-items: center;
`;

const _Header = styled(_Flex)`
  width: 100%;
  background-color: #ccc;
  justify-content: center;
  font-family: "HakgyoansimWoojuR";
`;

const _HeaderInnerBox = styled(_Flex)`
  width: 80%;
  height: 50px;
  justify-content: space-between;
`;

const _ContentBox = styled(_Flex)`
  justify-content: space-between;
  width: 150px;
`;

const _WriteButton = styled.button`
  border: none;
  background-color: #3a5fff;
  width: 65px;
  height: 35px;
  color: white;
  border-radius: 5px;
  font-family: "HakgyoansimWoojuR";
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const _UserButton = styled(_WriteButton)`
  background: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

const _BackDrop = styled(_Flex)`
  z-index: 5;
  position: fixed;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const _Logo = styled.img`
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const _Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

const _DropDown = styled.button`
  border: none;
  background: none;
  color: gray;
  font-size: small;

  &:hover {
    cursor: pointer;
  }
`;

export default function Header() {
  const modalOpenValue = useContext(ModalContext);
  const isLoginValue = useContext(UserContext);

  const openModal = () => {
    modalOpenValue.setModalOpen(true);
  };

  const openDropdown = () => {
    isLoginValue.setIsOpenDropdown(true);
  };

  const closeDropdown = () => {
    isLoginValue.setIsOpenDropdown(false);
  };
  return (
    <>
      <>
        <_Header>
          <_HeaderInnerBox>
            <_Logo src={logo} />
            <_ContentBox>
              <_WriteButton>글쓰기+</_WriteButton>
              {isLoginValue.isLogin ? (
                <_Flex>
                  <_Profile src={profile} />
                  {isLoginValue.isOpenDropdown ? (
                    <div>
                      <_DropDown onClick={() => closeDropdown()}>▲</_DropDown>
                      <Dropdown />
                    </div>
                  ) : (
                    <>
                      <_DropDown onClick={() => openDropdown()}>▼</_DropDown>
                    </>
                  )}
                </_Flex>
              ) : (
                <>
                  <_UserButton onClick={() => openModal()}>로그인</_UserButton>
                </>
              )}
            </_ContentBox>
          </_HeaderInnerBox>
        </_Header>
        {modalOpenValue.modalOpen ? (
          <>
            <_BackDrop>
              <Modal />
            </_BackDrop>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
}
