import "./css/post.css";
import styled from "styled-components";
import "./fonts/Font.css";
import img from "./img/img.png";
import { useState, useContext } from "react";
import ModalContext from "./store/modal-context";
import Alert from "./alert";

const _Container = styled.div`
  width: 380px;
  height: 450px;
  background-color: #f2f2f2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;

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

const _PostBox1 = styled.div`
  width: 90%;
  height: 90%;
`;

const _Title = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-size: 20px;
  font-weight: bold;
`;

const _UploadImg = styled.div`
  width: 100%;
  height: 45%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;

const _Img = styled.img`
  width: 100px;
`;

const _UploadButton = styled.button`
  width: 150px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: #3a5fff;
  font-family: "HakgyoansimWoojuR";
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const _OpenButton = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-family: "HakgyoansimWoojuR";
  font-weight: bolder;
  font-size: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;

const _ClickOpenButton = styled(_OpenButton)`
  border: 1px solid #3a5fff;
  color: #3a5fff;
`;

const _ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const _ConfirmButton = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #3a5fff;
  font-family: "HakgyoansimWoojuR";
  color: white;
  font-size: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  margin-right: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const _CanButton = styled(_ConfirmButton)`
  background-color: white;
  color: black;
  margin: 0px;
`;

const _ButtonBox2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

export default function Post() {
  const [isClick, setIsClick] = useState(true);

  const postOpen = useContext(ModalContext);
  const AlertOpen = useContext(ModalContext);

  const buttonClick = () => {
    setIsClick(!isClick);
  };

  const closePost = () => {
    postOpen.setPostOpen(false);
  };

  const ClickAlertOpen = () => {
    AlertOpen.setAlertOpen(true);
  };

  return (
    <>
      {AlertOpen.alertOpen ? (
        <>
          <_BackDrop>
            <Alert text={"출간이 완료되었습니다"} link={"/"} />
          </_BackDrop>
        </>
      ) : (
        <>
          <_Container>
            <_PostBox1>
              <_Title>썸네일 업로드</_Title>
              <_UploadImg>
                <_Img src={img} />
                <_UploadButton>썸네일 업로드</_UploadButton>
              </_UploadImg>
              <div style={{ marginTop: "20px" }}>
                <_Title>공개설정</_Title>
                <_ButtonBox>
                  {isClick ? (
                    <>
                      <_ClickOpenButton>공개</_ClickOpenButton>
                      <_OpenButton onClick={() => buttonClick()}>
                        비공개
                      </_OpenButton>
                    </>
                  ) : (
                    <>
                      <_OpenButton onClick={() => buttonClick()}>
                        공개
                      </_OpenButton>
                      <_ClickOpenButton>비공개</_ClickOpenButton>
                    </>
                  )}
                </_ButtonBox>
              </div>
              <_ButtonBox2>
                <_ConfirmButton onClick={() => ClickAlertOpen()}>
                  확인
                </_ConfirmButton>
                <_CanButton onClick={() => closePost()}>취소</_CanButton>
              </_ButtonBox2>
            </_PostBox1>
          </_Container>
        </>
      )}
    </>
  );
}
