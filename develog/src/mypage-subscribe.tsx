import styled from "styled-components";
import "./fonts/Font.css";
import profile from "./img/profile.png";

const _CommentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
`;

const _CommentUser2 = styled(_CommentUser)`
  justify-content: none;
  border: none;
  margin: 0px;
`;

const _CommentUserProfile = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 50%;
`;

const _CommentUserNick = styled.div`
  font-weight: bold;
  font-family: "HakgyoansimWoojuR";
  font-size: 20px;
`;

const _CommentUserTime = styled(_CommentUserNick)`
  color: #ccc;
  margin-top: 5px;
  font-size: 15px;
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

const _Dynamic = styled.div`
  width: 100%;

  @media screen and (max-width: 600px) {
    & {
      width: 60%;
    }
  }

  @media screen and (max-width: 360px) {
    & {
      width: 300px;
    }
  }
`;

export default function MypageSubscribe() {
  return (
    <_Dynamic>
      <_CommentUser>
        <_CommentUser2>
          <_CommentUserProfile src={profile} />
          <div>
            <_CommentUserNick>test</_CommentUserNick>
            <_CommentUserTime>방금전</_CommentUserTime>
          </div>
        </_CommentUser2>
        <div>
          <_UserButton>구독취소</_UserButton>
        </div>
      </_CommentUser>
      <_CommentUser>
        <_CommentUser2>
          <_CommentUserProfile src={profile} />
          <div>
            <_CommentUserNick>레모나</_CommentUserNick>
            <_CommentUserTime>10분전</_CommentUserTime>
          </div>
        </_CommentUser2>
        <div>
          <_UserButton>구독취소</_UserButton>
        </div>
      </_CommentUser>
      <_CommentUser>
        <_CommentUser2>
          <_CommentUserProfile src={profile} />
          <div>
            <_CommentUserNick>프라푸치노</_CommentUserNick>
            <_CommentUserTime>15분전</_CommentUserTime>
          </div>
        </_CommentUser2>
        <div>
          <_UserButton>구독취소</_UserButton>
        </div>
      </_CommentUser>
    </_Dynamic>
  );
}
