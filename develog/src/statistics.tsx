import styled from "styled-components";
import "./fonts/Font.css";
import statisticsImg from "./img/statistics.png";
import StatisticsView from "./statistics-view";

const _Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "HakgyoansimWoojuR";
`;

const _ProfileBox = styled(_Flex)`
  width: 40%;
  height: 300px;
  border: 1px solid #ccc;
  flex-direction: column;
`;

const _ButtonBox = styled(_Flex)`
  width: 200px;
  justify-content: space-around;
  height: 15px;
`;

const _StatisticsBox = styled(_ProfileBox)`
  width: 80%;
  justify-content: space-evenly;
`;

const _StatisticsButton = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  font-family: "HakgyoansimWoojuR";

  &:hover {
    cursor: pointer;
    border-bottom: 1.5px solid #3a5fff;
  }
`;

const _StatisticImg = styled.img`
  height: 170px;
`;

export default function Statistic() {
  return (
    <_StatisticsBox>
      <_ButtonBox>
        <_StatisticsButton>조회수</_StatisticsButton>
        <_StatisticsButton>좋아요</_StatisticsButton>
        <_StatisticsButton>구독</_StatisticsButton>
      </_ButtonBox>
      <div>
        <_StatisticImg src={statisticsImg} />
      </div>
    </_StatisticsBox>
  );
}
