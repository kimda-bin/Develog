import styled from "styled-components";
import "./fonts/Font.css";

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
  height: 140px;
  display: flex;
  justify-content: space-evenly;
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

export default function Login() {
  return (
    <_FlexInput>
      <_Input type="text" placeholder="이메일" />
      <_Input type="password" placeholder="비밀번호" />
      <_Button>로그인</_Button>
    </_FlexInput>
  );
}
