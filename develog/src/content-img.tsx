import styled from "styled-components";
import "./fonts/Font.css";
import profile from "./img/profile.png";

const _ContentBox = styled.div`
  width: 265px;
  height: 320px;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  &:hover {
    @keyframes contentHover {
      0% {
        margin-top: 0px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
      }
      50% {
        margin-top: -1px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
      }
      100% {
        margin-top: -2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      }
    }

    animation: contentHover 0.4s ease;
    animation-fill-mode: forwards;
  }
`;

const _ContentBox2 = styled.div`
  padding: 10px;
  height: 40%;
`;

const _Title = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-size: 18px;
  font-weight: bolder;
`;

const _Content = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 5px;
  font-family: "HakgyoansimWoojuR";
  font-size: 16px;
  text-overflow: ellipsis;
  word-break: keep-all;
`;

const _ContentBottom = styled.div`
  font-family: "HakgyoansimWoojuR";
  color: gray;
  font-size: 13px;
`;

const _ContentBoxBottom = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Span = styled.span`
  font-family: "HakgyoansimWoojuR";
  color: gray;
  font-size: 12px;
  margin: 0px 5px;
`;

const _Nickname = styled(_Span)`
  color: black;
  font-weight: bold;
  margin: 0px;
`;

const _User = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const _Like = styled(_Nickname)`
  margin-right: 10px;
`;

const _Image = styled.div`
  height: 40%;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;

const _ImgSize = styled.img`
  width: 265px;
  height: 108px;
  border-radius: 5px 5px 0px 0px;
`;

interface Props {
  title: string;
  imgUrl: string;
  content: string;
  nickname: string;
}

export default function ContentImg({
  imgUrl,
  title,
  content,
  nickname,
}: Props) {
  return (
    <div>
      <_ContentBox>
        <_Image>
          <_ImgSize src={imgUrl} />
        </_Image>
        <_ContentBox2>
          <_Title>{title}</_Title>
          <_Content>{content}</_Content>
          <_ContentBottom>2일전 · 5개의 댓글</_ContentBottom>
        </_ContentBox2>
        <_ContentBoxBottom>
          <_User>
            <img src={profile} style={{ width: "22px" }} />
            <_Span>by</_Span>
            <_Nickname>{nickname}</_Nickname>
          </_User>
          <_Like>❤ 5</_Like>
        </_ContentBoxBottom>
      </_ContentBox>
    </div>
  );
}
