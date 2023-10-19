import Header from "./header";

import styled from "styled-components";
import "./fonts/Font.css";
import profile from "./img/profile.png";
import profile2 from "./img/profile.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const _Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const _ContentBox = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  flex-direction: column;
`;

const _Flex2 = styled(_Flex)`
  justify-content: flex-start;
  align-items: center;
`;

const _Title = styled.div`
  width: 100%;
  font-family: "HakgyoansimWoojuR";
  font-size: 40px;
  font-weight: bold;
`;

const _User = styled.div`
  width: 100%;
  font-family: "HakgyoansimWoojuR";
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _UserButton = styled.button`
  border: none;
  background: none;
  color: gray;
  font-family: "HakgyoansimWoojuR";
  font-size: 17px;

  &:hover {
    cursor: pointer;
  }
`;

const _ContentBox2 = styled.div`
  margin-top: 70px;
  height: 150px;
`;

const _ContentText = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-size: 18px;
`;

const _UserBox = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 23px;
  margin-bottom: 100px;
  justify-content: space-between;
`;

const _Profile = styled.img`
  width: 115px;
`;

const _ProfileNick = styled.div`
  margin-left: 15px;
  font-family: "HakgyoansimWoojuR";
  font-size: 19px;
  font-weight: bold;
`;

const _Flex3 = styled(_Flex)`
  display: flex;
  align-items: center;
`;

const _Comment = styled(_ProfileNick)`
  margin: 0px;
`;

const _CommentInput = styled.input`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-family: "HakgyoansimWoojuR";
  padding: 5px 0px 80px 2px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-size: 15px;
`;

const _CommentButton = styled.button`
  border: none;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  color: white;
  background-color: #3a5fff;
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`;

const _CommentButtonFlex = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const _CommentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const _CommentUser2 = styled(_CommentUser)`
  justify-content: none;
  margin: 0px;
`;

const _CommentUserProfile = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 16px;
  border-radius: 50%;
`;

const _CommentUserNick = styled.div`
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
`;

const _CommentUserTime = styled(_CommentUserNick)`
  color: #ccc;
  margin-top: 5px;
`;

const _UserComment = styled.div`
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
  letter-spacing: 1px;
  margin-bottom: 25px;
`;

const _UserComment2 = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const _AnswerButton = styled.div`
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
  letter-spacing: 1px;
  color: #3a5fff;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const _CommentButton2 = styled(_CommentButton)`
  background-color: white;
  color: #3a5fff;
`;

export default function ContentView() {
  const [isAdd, setIsAdd] = useState(false);
  const [isAdd2, setIsAdd2] = useState(false);
  const navigate = useNavigate();

  const addComment = () => {
    setIsAdd(!isAdd);
  };

  const addComment2 = () => {
    console.log("first");
    setIsAdd2(!isAdd2);
  };
  return (
    <_Flex>
      <Header />
      <_ContentBox>
        <_Title>타이틀</_Title>
        <_User>
          <_Flex2>
            <div style={{ fontWeight: "bold" }}>test </div>
            <span style={{ marginLeft: "4px" }}> · 14분전 · 🔒</span>
          </_Flex2>
          <div>
            <_UserButton>수정</_UserButton>
            <_UserButton>삭제</_UserButton>
          </div>
        </_User>
        <_ContentBox2>
          <_ContentText>
            컨텐츠 내용입니다. 작성한 글의 내용을 볼 수 있습니다.
          </_ContentText>
        </_ContentBox2>
        <_UserBox>
          <_Flex3>
            <_Profile src={profile} />
            <_ProfileNick onClick={() => navigate("/mypage")}>
              dabeen
            </_ProfileNick>
          </_Flex3>
          <div></div>
        </_UserBox>

        <div>
          <_Comment>2개의 댓글</_Comment>
          <_CommentInput type="text" placeholder="댓글을 작성하세요" />
          <_CommentButtonFlex>
            <_CommentButton>댓글 작성</_CommentButton>
          </_CommentButtonFlex>
        </div>

        <_CommentUser>
          <_CommentUser2>
            <_CommentUserProfile src={profile} />
            <div>
              <_CommentUserNick>test</_CommentUserNick>
              <_CommentUserTime>방금전</_CommentUserTime>
            </div>
          </_CommentUser2>
          <div>
            <_UserButton>수정</_UserButton>
            <_UserButton>삭제</_UserButton>
          </div>
        </_CommentUser>
        <_UserComment>댓글댓글</_UserComment>
        {isAdd ? (
          <>
            <_AnswerButton onClick={() => addComment()}>- 숨기기</_AnswerButton>
            <_Flex>
              <_UserComment2 style={{ width: "90%" }}>
                <_CommentInput type="text" placeholder="댓글을 작성하세요" />
                <_CommentButtonFlex>
                  <_CommentButton2>취소</_CommentButton2>
                  <_CommentButton>댓글 작성</_CommentButton>
                </_CommentButtonFlex>
              </_UserComment2>
            </_Flex>
          </>
        ) : (
          <>
            <_AnswerButton onClick={() => addComment()}>
              + 답글 달기
            </_AnswerButton>
          </>
        )}
        <_CommentUser>
          <_CommentUser2>
            <_CommentUserProfile src={profile2} />
            <div>
              <_CommentUserNick>귀오미</_CommentUserNick>
              <_CommentUserTime>방금전</_CommentUserTime>
            </div>
          </_CommentUser2>
        </_CommentUser>
        <_UserComment>댓글댓글</_UserComment>
        {isAdd2 ? (
          <>
            <_AnswerButton onClick={() => addComment2()}>
              - 숨기기
            </_AnswerButton>
            <_Flex>
              <_UserComment2 style={{ width: "90%" }}>
                <_CommentInput type="text" placeholder="댓글을 작성하세요" />
                <_CommentButtonFlex>
                  <_CommentButton2>취소</_CommentButton2>
                  <_CommentButton>댓글 작성</_CommentButton>
                </_CommentButtonFlex>
              </_UserComment2>
            </_Flex>
          </>
        ) : (
          <>
            <_AnswerButton onClick={() => addComment2()}>
              + 답글 달기
            </_AnswerButton>
          </>
        )}
      </_ContentBox>
    </_Flex>
  );
}
