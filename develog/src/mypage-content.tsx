import styled from "styled-components";
import "./fonts/Font.css";
import Search from "./search";

const _Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const _Search = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    & {
      width: 480px;
    }
  }

  @media screen and (max-width: 360px) {
    & {
      width: 450px;
    }
  }
`;

const _Explanation = styled.div`
  font-size: 13px;
  color: darkgray;
  margin-top: 3px;
`;

const _Box = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-top: 15px;

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

const _Flex = styled.div`
  @media screen and (max-width: 600px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default function MypageContent() {
  return (
    <div style={{ width: "100%" }}>
      <_Search>
        <Search />
      </_Search>
      <_Flex>
        <_Box>
          <_Title>CSS Modal 커스텀 </_Title>
          <div>모달창 커스텀을 하려고합니다. 도움이 되었다면 하트</div>
          <_Explanation>1일전 · 11개의 댓글 · ❤ 15</_Explanation>
        </_Box>
        <_Box>
          <_Title>CSS 스크롤바 커스텀</_Title>
          <div>프로젝트를 하다가 스크롤바가 신경쓰여서 없애보았습니다</div>
          <_Explanation>1일전 · 8개의 댓글 · ❤ 9</_Explanation>
        </_Box>
        <_Box>
          <_Title>REACT 잘하는법</_Title>
          <div>react 코딩을 열심히 한다</div>
          <_Explanation>2일전 · 5개의 댓글 · ❤ 5</_Explanation>
        </_Box>
        <_Box>
          <_Title>안녕하세요</_Title>
          <div>안녕하세요 귀오미라고 합니다^^</div>
          <_Explanation>2일전 · 3개의 댓글 · ❤ 0</_Explanation>
        </_Box>
      </_Flex>
    </div>
  );
}
