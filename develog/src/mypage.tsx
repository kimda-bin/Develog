import Header from "./header";
import styled from "styled-components";
import profile from "./img/profile.jpg";
import "./fonts/Font.css";
import Statistic from "./statistics";
import Introduce from "./introduce";
import { useState } from "react";
import Intro from "./intro";
import MypageContent from "./mypage-content";
import { useNavigate } from "react-router-dom";
import MypageSubscribe from "./mypage-subscribe";

const _Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "HakgyoansimWoojuR";
  margin-top: 85px;
`;

const _Container = styled(_Flex)`
  width: 80%;
  flex-direction: column;
  margin-top: 0px;
`;

const _Container2 = styled(_Flex)`
  width: 100%;
  margin-top: 0px;
`;

const _ProfileBox = styled.div`
  width: 65%;
  margin-top: 80px;
  display: flex;
  border-bottom: 1px solid #ccc;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 25px;
`;

const _StatisticsBox = styled(_ProfileBox)`
  width: 60%;
`;

const _Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media screen and (max-width: 420px) {
    & {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 385px) {
    & {
      width: 50px;
      height: 50px;
    }
  }
`;

const _ProfileBox2 = styled(_Flex)`
  flex-direction: column;
  margin: 15px;
  display: flex;
  align-items: flex-start;
`;

const _Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
`;

const _Email = styled.div`
  color: gray;
`;

const _ButtonDiv = styled.div`
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _ButtonList = styled.div`
  display: flex;
  justify-content: space-around;
  width: 350px;

  @media screen and (max-width: 600px) {
    & {
      width: 270px;
    }
  }
`;

const _ListButton = styled.button`
  border: none;
  background: none;
  width: 60px;
  font-size: 21px;
  font-family: "HakgyoansimWoojuR";
  font-weight: bold;

  &:hover {
    cursor: pointer;
    border-bottom: 1.5px solid #3a5fff;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 50px;
      font-size: 18px;
    }
  }
`;

const __ListClickButton = styled(_ListButton)`
  border-bottom: 1.5px solid #3a5fff;
  color: #3a5fff;
`;

const _Component = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

const _ContentComponent = styled(_Component)`
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export default function MyPage() {
  const [clickContent, setClickContent] = useState(true);
  const [clickStatistic, setClickStatistic] = useState(false);
  const [clickIntro, setClickIntro] = useState(false);
  const [clickSubscribe, setClickSubscribe] = useState(false);
  const navigate = useNavigate();

  const contentClick = () => {
    setClickContent(true);
    setClickStatistic(false);
    setClickIntro(false);
    setClickSubscribe(false);
  };

  const contentStatistic = () => {
    setClickContent(false);
    setClickStatistic(true);
    setClickIntro(false);
    setClickSubscribe(false);
  };

  const contentIntro = () => {
    setClickContent(false);
    setClickStatistic(false);
    setClickIntro(true);
    setClickSubscribe(false);
  };

  const contentSubscribe = () => {
    setClickContent(false);
    setClickStatistic(false);
    setClickIntro(false);
    setClickSubscribe(true);
  };

  return (
    <>
      <Header />
      <_Flex>
        <_Container>
          <_Container2>
            <_ProfileBox>
              <_Profile src={profile} />
              <_ProfileBox2>
                <_Nickname>귀오미</_Nickname>
                <_Email>test@test.com</_Email>
              </_ProfileBox2>
            </_ProfileBox>
          </_Container2>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div>
            {clickContent && (
              <>
                <_ButtonDiv>
                  <_ButtonList>
                    <__ListClickButton onClick={() => contentClick()}>
                      글
                    </__ListClickButton>
                    <_ListButton onClick={() => contentStatistic()}>
                      통계
                    </_ListButton>
                    <_ListButton onClick={() => contentIntro()}>
                      소개
                    </_ListButton>
                    <_ListButton onClick={() => contentSubscribe()}>
                      구독
                    </_ListButton>
                  </_ButtonList>
                </_ButtonDiv>
                <_ContentComponent>
                  <MypageContent />
                </_ContentComponent>
              </>
            )}

            {clickStatistic && (
              <>
                <_ButtonDiv>
                  <_ButtonList>
                    <_ListButton onClick={() => contentClick()}>글</_ListButton>
                    <__ListClickButton onClick={() => contentStatistic()}>
                      통계
                    </__ListClickButton>
                    <_ListButton onClick={() => contentIntro()}>
                      소개
                    </_ListButton>
                    <_ListButton onClick={() => contentSubscribe()}>
                      구독
                    </_ListButton>
                  </_ButtonList>
                </_ButtonDiv>
                <_Component>
                  <Statistic />
                </_Component>
              </>
            )}

            {clickIntro && (
              <>
                <_ButtonDiv>
                  <_ButtonList>
                    <_ListButton onClick={() => contentClick()}>글</_ListButton>
                    <_ListButton onClick={() => contentStatistic()}>
                      통계
                    </_ListButton>
                    <__ListClickButton onClick={() => contentIntro()}>
                      소개
                    </__ListClickButton>
                    <_ListButton onClick={() => contentSubscribe()}>
                      구독
                    </_ListButton>
                  </_ButtonList>
                </_ButtonDiv>
                <_Component>
                  <Intro />
                </_Component>
              </>
            )}

            {clickSubscribe && (
              <>
                <_ButtonDiv>
                  <_ButtonList>
                    <_ListButton onClick={() => contentClick()}>글</_ListButton>
                    <_ListButton onClick={() => contentStatistic()}>
                      통계
                    </_ListButton>
                    <_ListButton onClick={() => contentIntro()}>
                      소개
                    </_ListButton>
                    <__ListClickButton onClick={() => contentSubscribe()}>
                      구독
                    </__ListClickButton>
                  </_ButtonList>
                </_ButtonDiv>
                <_Component>
                  <MypageSubscribe />
                </_Component>
              </>
            )}
          </div>
        </_Container>
      </_Flex>
    </>
  );
}
