import Header from "./header";
import profile from "./img/profile.png";
import styled from "styled-components";
import "./fonts/Font.css";
import { useState, useContext } from "react";
import ModalContext from "./store/modal-context";
import Alert from "./alert";
import UserContext from "./store/user-context";

const _Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const _Profile = styled.img`
  width: 115px;
  margin-bottom: 10px;
`;

const _ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  border-right: 1px solid #ccc;
  padding-right: 30px;
`;

const _ProfileContainer = styled.div`
  width: 640px;
  margin-top: 100px;
  display: flex;
  margin-bottom: 60px;
`;

const _ImgButton = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-family: "HakgyoansimWoojuR";
  background-color: #3a5fff;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
`;

const _ImgButton2 = styled(_ImgButton)`
  background-color: white;
  color: #3a5fff;
`;

const _Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
`;

const _UpdateButton = styled.div`
  font-family: "HakgyoansimWoojuR";
  border: none;
  color: #3a5fff;
  background: none;
  width: fit-content;
  border-bottom: 1px solid #3a5fff;
  margin-top: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const _Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 640px;
  align-items: center;
  height: fit-content;
  margin-top: 10px;
`;

const _ContentTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
  letter-spacing: 1px;
  margin-right: 15px;
`;

const _ContentTitle2 = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-size: 18px;
  letter-spacing: 1px;
  color: #3c3c3c;
`;

const _ExpText = styled.div`
  color: #888;
  font-family: "HakgyoansimWoojuR";
  font-size: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const _UpdateInput = styled.input`
  font-family: "HakgyoansimWoojuR";
  width: 350px;
  height: 29px;
  padding-left: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const _SaveButton = styled.button`
  background-color: #3a5fff;
  font-family: "HakgyoansimWoojuR";
  width: 60px;
  border: none;
  height: 30px;
  border-radius: 5px;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

const _Flex2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 315px;
`;

const _YesButton = styled.button`
  border: 1px solid #3a5fff;
  color: #3a5fff;
  font-family: "HakgyoansimWoojuR";
  border-radius: 5px;
  background-color: white;
  height: 23px;
  width: 50px;
  font-weight: bold;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const _MarginPadding = styled.div`
  margin: 15px 0px;
`;

const _NoButton = styled(_YesButton)`
  background-color: #3a5fff;
  color: white;
`;

const _DeleteUser = styled.button`
  background: red;
  color: white;
  width: 100px;
  border-radius: 5px;
  height: 30px;
  font-family: "HakgyoansimWoojuR";
  border: none;
  font-size: 15px;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const _ExpText2 = styled(_ExpText)`
  margin-bottom: 60px;
  border: none;
`;

const _Daynamic = styled.div`
  @media screen and (max-width: 650px) {
    & {
      width: 500px;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      width: 400px;
    }
  }
`;

const _Dynamic2 = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    & {
      flex-direction: column;
    }
  }
`;

const _BackDrop = styled.div`
  z-index: 50;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
`;

export default function SettingPage() {
  const [titleUpdate, setTitleUpdate] = useState(false);
  const [emailUpdate, setEmailUpdate] = useState(false);
  const [emailAlramComment, setEmailAlramComment] = useState(false);
  const [emailAlramUpdate, setEmailAlramUpdate] = useState(false);

  const AlertOpen = useContext(ModalContext);
  const isLoginValue = useContext(UserContext);

  const clickUpdateTitle = () => {
    setTitleUpdate(!titleUpdate);
  };

  const clickUpdateEmail = () => {
    setEmailUpdate(!emailUpdate);
  };

  const commentAlarm = () => {
    setEmailAlramComment(!emailAlramComment);
  };

  const updateAlarm = () => {
    setEmailAlramUpdate(!emailAlramUpdate);
  };

  const deleteUser = () => {
    AlertOpen.setAlertOpen(true);
    isLoginValue.setIsLogin(false);
  };

  return (
    <>
      {AlertOpen.alertOpen ? (
        <>
          <_BackDrop>
            <Alert text={"회원탈퇴 하였습니다"} link={"/"} />
          </_BackDrop>
        </>
      ) : (
        <></>
      )}
      <_Flex>
        <Header />
        <_Daynamic>
          <_ProfileContainer>
            <_ProfileBox>
              <_Profile src={profile} />
              <_ImgButton>이미지 업로드</_ImgButton>
              <_ImgButton2>이미지 제거</_ImgButton2>
            </_ProfileBox>
            <div style={{ marginLeft: "21px", alignItems: "center" }}>
              <_Title>귀오미</_Title>
              <_UpdateButton>수정</_UpdateButton>
            </div>
          </_ProfileContainer>

          <_MarginPadding>
            {titleUpdate ? (
              <>
                <_Content>
                  <div style={{ display: "flex" }}>
                    <_ContentTitle>디벨로그 제목</_ContentTitle>
                    <_UpdateInput value={"test.log"} />
                  </div>
                  <div>
                    <_SaveButton onClick={() => clickUpdateTitle()}>
                      저장
                    </_SaveButton>
                  </div>
                </_Content>
              </>
            ) : (
              <>
                <_Content>
                  <div style={{ display: "flex" }}>
                    <_ContentTitle>디벨로그 제목</_ContentTitle>
                    <_ContentTitle2>test.log</_ContentTitle2>
                  </div>
                  <div>
                    <_UpdateButton onClick={() => clickUpdateTitle()}>
                      수정
                    </_UpdateButton>
                  </div>
                </_Content>
              </>
            )}

            <_ExpText>
              개인페이지의 좌측 상단에 나타나는 페이지 제목입니다.
            </_ExpText>
          </_MarginPadding>

          <_MarginPadding>
            {titleUpdate ? (
              <>
                <_Content>
                  <div style={{ display: "flex" }}>
                    <_ContentTitle>이메일 변경</_ContentTitle>
                    <_UpdateInput value={"test@test.com"} />
                  </div>
                  <div>
                    <_SaveButton onClick={() => clickUpdateEmail()}>
                      저장
                    </_SaveButton>
                  </div>
                </_Content>
              </>
            ) : (
              <>
                <_Content>
                  <div style={{ display: "flex" }}>
                    <_ContentTitle>이메일 변경</_ContentTitle>
                    <_ContentTitle2>test@test.com</_ContentTitle2>
                  </div>
                  <div>
                    <_UpdateButton onClick={() => clickUpdateEmail()}>
                      수정
                    </_UpdateButton>
                  </div>
                </_Content>
              </>
            )}

            <_ExpText>
              개인페이지의 좌측 상단에 나타나는 페이지 제목입니다.
            </_ExpText>
          </_MarginPadding>
          <_MarginPadding>
            <_Content>
              <_Dynamic2>
                <_ContentTitle style={{ marginTop: "2px" }}>
                  이메일 수신 변경
                </_ContentTitle>
                <div>
                  <_Flex2>
                    <_ContentTitle2 style={{ marginTop: "1px" }}>
                      댓글 알림
                    </_ContentTitle2>
                    {emailAlramComment ? (
                      <>
                        <div>
                          <_NoButton>Yes</_NoButton>
                          <_YesButton onClick={() => commentAlarm()}>
                            No
                          </_YesButton>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <_YesButton onClick={() => commentAlarm()}>
                            Yes
                          </_YesButton>
                          <_NoButton>No</_NoButton>
                        </div>
                      </>
                    )}
                  </_Flex2>
                  <_Flex2>
                    <_ContentTitle2 style={{ marginTop: "5px" }}>
                      디벨로그 업데이트 소식
                    </_ContentTitle2>
                    {emailAlramUpdate ? (
                      <>
                        <div>
                          <_NoButton>Yes</_NoButton>
                          <_YesButton onClick={() => updateAlarm()}>
                            No
                          </_YesButton>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <_YesButton onClick={() => updateAlarm()}>
                            Yes
                          </_YesButton>
                          <_NoButton>No</_NoButton>
                        </div>
                      </>
                    )}
                  </_Flex2>
                </div>
              </_Dynamic2>
            </_Content>
            <_ExpText>이메일 수신을 변경할 수 있습니다.</_ExpText>
          </_MarginPadding>

          <_Content>
            <div style={{ display: "flex" }}>
              <_ContentTitle>회원탈퇴</_ContentTitle>
              <_DeleteUser onClick={() => deleteUser()}>회원탈퇴</_DeleteUser>
            </div>
          </_Content>
          <_ExpText2>
            탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
          </_ExpText2>
        </_Daynamic>
      </_Flex>
    </>
  );
}
