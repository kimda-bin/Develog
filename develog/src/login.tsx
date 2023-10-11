import React from "react";
import styled from "styled-components";
import modalImg from "./img/modal.png";
import google from "./img/google.png";
import github from "./img/github.png";
import kakao from "./img/kakao-talk.png";
import "./fonts/Font.css";

const _Modal = styled.div`
  width: 480px;
  height: 350px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 2px 2px 2px gray;
  font-weight: bold;
  justify-content: space-around;
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

const _Input = styled.input`
  width: 100%;
  height: 27px;
  border: 1.5px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
  padding: 0px;
  font-family: "HakgyoansimWoojuR";
`;

const _Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
`;

const _FlexInput = styled(_Flex)`
  width: 230px;
  margin-top: 15px;
`;

const _FlexSymbol = styled(_FlexInput)`
  justify-content: space-between;
  flex-direction: row;
`;

const _Button = styled.button`
  width: 100%;
  border: 1.5px solid #3a5fff;
  height: 27px;
  background-color: #3a5fff;
  color: white;
  border-radius: 3px;
  margin-top: 10px;
  font-family: "HakgyoansimWoojuR";
`;

const _Symbol = styled.img`
  width: 35px;
`;

export default function Login() {
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
        <_Flex>
          <_ModalFont>로그인</_ModalFont>
          <_FlexInput>
            <_Input type="text" placeholder="이메일" />
            <_Input type="password" placeholder="비밀번호" />
            <_Button>로그인</_Button>
          </_FlexInput>
          <div style={{ marginTop: "15px" }}>
            <div>소셜로그인</div>
            <_FlexSymbol>
              <_Symbol src={google} />
              <_Symbol src={github} />
              <_Symbol src={kakao} />
            </_FlexSymbol>
          </div>
        </_Flex>
      </_Modal>
    </div>
  );
}
