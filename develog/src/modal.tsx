import styled from "styled-components";
import modalImg from "./img/modal.png";
import google from "./img/google.png";
import github from "./img/github.png";
import kakao from "./img/kakao-talk.png";
import "./fonts/Font.css";
import { useState, useContext } from "react";
import Login from "./login";
import Signup from "./signup";
import ModalContext from "./store/modal-context";
import UserContext from "./store/user-context";

const _Modal = styled.div`
  width: 480px;
  height: 350px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px gray;
  font-weight: bold;
  justify-content: space-around;
  background-color: white;

  @keyframes dropdown {
    0% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: dropdown 0.4s ease;
`;

const _ModalImg = styled.img`
  width: 150px;
  margin: 0px 10px;
`;

const _ModalImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _ModalFont = styled.div`
  font-size: 20px;
`;

const _Line = styled.div`
  border-left: 1.5px solid #ccc;
  height: 300px;
`;

const _ContentBox = styled.div`
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
`;

const _FlexSymbol = styled(_Flex)`
  width: 230px;
  margin-top: 15px;
  justify-content: space-between;
  flex-direction: row;
`;

const _Symbol = styled.img`
  width: 32px;
  &:hover {
    cursor: pointer;
  }
`;

const _ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const _CloseButton = styled.button`
  border: none;
  background: none;
  font-size: unset;
  margin: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const _EndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const _EndText = styled.div`
  font-size: 15px;
  margin: 20px;
`;

const _Span = styled.span`
  color: #3a5fff;
  &:hover {
    cursor: pointer;
  }
`;

export default function Modal() {
  const [isLogin, setIsLogin] = useState(false);

  const modalOpenValue = useContext(ModalContext);
  const isLoginValue = useContext(UserContext);
  const AlertOpen = useContext(ModalContext);

  const signup = () => {
    setIsLogin(true);
  };

  const login = () => {
    setIsLogin(false);
  };

  const modalValue = () => {
    modalOpenValue.setModalOpen(false);
  };

  const UserLogin = () => {
    modalOpenValue.setModalOpen(false);
    isLoginValue.setIsLogin(true);
  };

  return (
    <div style={{ fontFamily: "HakgyoansimWoojuR" }}>
      <_Modal>
        <div>
          <_ModalImgContainer>
            <_ModalImg src={modalImg} />
            <_ModalFont>환영합니다!</_ModalFont>
          </_ModalImgContainer>
        </div>
        <_Line />
        <_ContentBox>
          <_ButtonPosition>
            <_CloseButton onClick={() => modalValue()}>x</_CloseButton>
          </_ButtonPosition>
          <_Flex>
            {isLogin ? (
              <>
                <_ModalFont>회원가입</_ModalFont>
                <Signup />
              </>
            ) : (
              <>
                <_ModalFont>로그인</_ModalFont>
                <Login />
              </>
            )}
            <div style={{ marginTop: "15px" }}>
              <div>소셜로그인</div>
              <_FlexSymbol>
                <_Symbol src={google} onClick={() => UserLogin()} />
                <_Symbol src={github} onClick={() => UserLogin()} />
                <_Symbol src={kakao} onClick={() => UserLogin()} />
              </_FlexSymbol>
            </div>
          </_Flex>
          <_EndContainer>
            {isLogin ? (
              <_EndText>
                계정이 있으시다면?
                <_Span onClick={() => login()}>로그인</_Span>
              </_EndText>
            ) : (
              <_EndText>
                계정이 없으신가요?
                <_Span onClick={() => signup()}>회원가입</_Span>
              </_EndText>
            )}
          </_EndContainer>
        </_ContentBox>
      </_Modal>
    </div>
  );
}
