import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StatisticsWeekend from "./statistics-weekend";

const _IntroduceBox = styled.div`
  width: 65%;
  height: 400px;

  flex-direction: column;
`;

const _IntroduceBox2 = styled.div`
  margin-top: 10px;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _IntroduceBox3 = styled(_IntroduceBox2)`
  height: 70%;
`;

const _IntroBox4 = styled.div`
  display: flex;
  align-items: center;
`;

const _IntroBoxHead = styled.div`
  margin: 20px 0px;
  font-weight: bold;
`;

const _IntroHead = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const _IntroText = styled.div`
  border-bottom: 1.5px solid #3a5fff;
  width: fit-content;
`;

export default function Introduce() {
  return (
    <>
      <_IntroduceBox>
        <_IntroduceBox2>
          <_IntroHead>
            <_IntroText>소개글</_IntroText>
          </_IntroHead>
          <div>백엔드 개발자를 꿈꾸는 귀오미 입니다! 취준생 파이팅!</div>
        </_IntroduceBox2>

        <_IntroduceBox3>
          <_IntroHead>
            <_IntroText>주간 리포트</_IntroText>
          </_IntroHead>
          <div>
            <_IntroBox4>
              <div style={{ marginLeft: "50px" }}>
                <_IntroBoxHead style={{ fontWeight: "bold" }}>
                  이번주 내가 쓴 <span style={{ color: "#3A5FFF" }}>글</span>:
                  <span style={{ fontWeight: "normal" }}>3회</span>
                </_IntroBoxHead>
                <_IntroBoxHead style={{ fontWeight: "bold" }}>
                  이번주 내가 쓴 <span style={{ color: "#3A5FFF" }}>댓글</span>:
                  <span style={{ fontWeight: "normal" }}>5회</span>
                </_IntroBoxHead>
                <_IntroBoxHead style={{ fontWeight: "bold" }}>
                  이번주 내가 한{" "}
                  <span style={{ color: "#3A5FFF" }}>좋아요</span>:
                  <span style={{ fontWeight: "normal" }}>11회</span>
                </_IntroBoxHead>
                <_IntroBoxHead style={{ fontWeight: "bold" }}>
                  이번주 내가 <span style={{ color: "#3A5FFF" }}>구독</span>한
                  수:
                  <span style={{ fontWeight: "normal" }}>1회</span>
                </_IntroBoxHead>
              </div>
              <StatisticsWeekend />
            </_IntroBox4>
          </div>
        </_IntroduceBox3>
      </_IntroduceBox>
    </>
  );
}
