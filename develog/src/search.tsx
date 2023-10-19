import styled from "styled-components";
import "./fonts/Font.css";
import search from "./img/loupe.png";

const _Flex = styled.div`
  display: flex;
  align-items: center;
`;

const _Input = styled.input`
  width: 150px;
  height: 25px;
  border: 1.5px solid #ccc;
  font-size: 15px;
  border-radius: 5px;
  background-color: #ccc;
  padding-left: 10px;
  font-family: "HakgyoansimWoojuR";
  font-weight: bold;

  &:focus {
    background-color: white;
  }

  @media screen and (max-width: 600px) {
    & {
      width: 120px;
    }
  }
`;

const _Img = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export default function Search() {
  return (
    <>
      <_Flex>
        <_Input type="text" placeholder="검색어 입력" />
        <_Img src={search} />
      </_Flex>
    </>
  );
}
