import React, { useState } from "react";
import Header from "./header";
import styled from "styled-components";
import "./fonts/Font.css";
import "./css/main.css";
import trend from "./img/trend.png";
import newContent from "./img/wall-clock.png";
import loupe from "./img/loupe.png";
import MainContent from "./main-content";

const _NavBar = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const _NavBar2 = styled.div`
  display: flex;
  width: 70%;
`;

const _NavButton = styled.button`
  font-family: "HakgyoansimWoojuR";
  border: none;
  width: 100px;
  height: 35px;
  background: none;
  font-size: 20px;
  border-bottom: 2px solid white;
  color: gray;

  &:hover {
    cursor: pointer;
  }
`;

const _NavButtonClick = styled(_NavButton)`
  border-bottom: 2px solid black;
  color: black;
`;

const _NavImg = styled.img`
  width: 15px;
  margin-right: 5px;
  filter: opacity(0.5);
`;

const _NavClickImg = styled(_NavImg)`
  filter: none;
`;

const _Search = styled.input`
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  height: 30px;
  font-family: "HakgyoansimWoojuR";
  padding-left: 7px;
  margin-right: 5px;
  background-color: #ccc;

  &:focus {
    background-color: white;
  }
`;

const _SearchBox = styled.div`
  display: flex;
  align-items: center;
`;

const _SearchImg = styled.img`
  width: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const _ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function Main() {
  const [isClick, setIsClick] = useState(true);

  const buttonClick = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <div style={{ height: "50px" }}>
        <Header />
      </div>
      <div>
        <div>
          <_NavBar>
            <_NavBar2>
              {isClick ? (
                <>
                  <_NavButtonClick>
                    <_NavClickImg src={trend} />
                    트랜딩
                  </_NavButtonClick>
                  <_NavButton onClick={() => buttonClick()}>
                    <_NavImg src={newContent} />
                    최신
                  </_NavButton>
                </>
              ) : (
                <>
                  <_NavButton onClick={() => buttonClick()}>
                    <_NavImg src={trend} />
                    트랜딩
                  </_NavButton>
                  <_NavButtonClick>
                    <_NavClickImg src={newContent} />
                    최신
                  </_NavButtonClick>
                </>
              )}
              <_SearchBox>
                <_Search type="text" placeholder="검색어를 입력하세요" />
                <_SearchImg src={loupe} />
              </_SearchBox>
            </_NavBar2>
          </_NavBar>
        </div>
        <_ContentBox>
          <MainContent />
        </_ContentBox>
      </div>
    </>
  );
}
