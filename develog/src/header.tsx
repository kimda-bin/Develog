import styled from "styled-components";
import "./fonts/Font.css";
import { useState, useContext } from "react";
import ModalGrobalStyle from "./globalStyle";
import Modal from "./modal";
import ModalContext from "./store/modal-context";
import logo from "./img/logo.png";

const _Header = styled.div`
  width: 100%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "HakgyoansimWoojuR";
  position: absolute;
`;

const _HeaderInnerBox = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
`;

const _WriteButton = styled.button`
  border: none;
  background-color: #3a5fff;
  width: 65px;
  height: 45px;
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
`;

const _BackDrop = styled.div`
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default function Header() {
  const modalOpenValue = useContext(ModalContext);
  const openModal = () => {
    modalOpenValue.setModalOpen(true);
  };
  return (
    <>
      <>
        <_Header>
          <_HeaderInnerBox>
            <_Logo src={logo} />
            <_ContentBox>
              <_WriteButton>글쓰기+</_WriteButton>
              <_UserButton onClick={() => openModal()}>로그인</_UserButton>
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
