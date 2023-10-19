import styled from "styled-components";
import "./fonts/Font.css";

const _Flex = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "HakgyoansimWoojuR";
  font-size: 20px;
  margin: 10px 0px;
`;

const _TotalBox = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 20px 0px;
  letter-spacing: 1px;
`;

const _Margin = styled.div`
  margin: 10px 0px;
`;

const _Title = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-weight: bold;
  font-size: 18px;
  padding-left: 50px;
  margin-top: 20px;
`;

export default function StatisticsTotal() {
  return (
    <_TotalBox>
      <_Title>총합</_Title>
      <_Flex>
        <div>
          <_Margin>구독자 수 : 35명</_Margin>
          <_Margin>좋아요 수 : 985개</_Margin>
        </div>
        <div>
          <_Margin>조회 수 : 1350회</_Margin>
          <_Margin>댓글 수 : 750개</_Margin>
        </div>
      </_Flex>
    </_TotalBox>
  );
}
