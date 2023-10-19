import styled from "styled-components";
import "./fonts/Font.css";

const _Intro = styled.div`
  font-family: "HakgyoansimWoojuR";
  display: flex;
  width: 400px;

  justify-content: space-around;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    & {
      width: fit-content;
      font-size: 14px;
    }
  }
`;

const _ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    & {
      justify-content: center;
      margin-top: 20px;
    }
  }
`;

const _Button = styled.button`
  font-family: "HakgyoansimWoojuR";
  font-size: 17px;
  border: none;
  height: 30px;
  border-radius: 8px;
  background-color: #3a5fff;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    & {
      font-size: 14px;
    }
  }
`;

export default function Intro() {
  return (
    <_Intro>
      <div>
        <div>백엔드 개발자 귀오미입니다! 잘부탁드려요!</div>
        <div>모든 취준생 파이팅🔥</div>
      </div>
      <_ButtonBox>
        <_Button>수정하기</_Button>
      </_ButtonBox>
    </_Intro>
  );
}
