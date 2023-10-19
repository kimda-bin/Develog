import styled from "styled-components";
import "./fonts/Font.css";
import statisticsImg from "./img/statistics.png";
import StatisticsView from "./statistics-view";
import StatisticsComment from "./statistics-comment";
import StatisticsLike from "./statistics-like";
import StatisticsSubscribe from "./statistics-subscribe";
import { useState } from "react";
import Select from "./select";
import StatisticsWeekend from "./statistics-weekend";
import StatisticsTotal from "./statistics-total";

const _Flex = styled.div`
  display: flex;
`;

const _Box = styled.div`
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-bottom: 20px;
`;

export default function Statistic() {
  return (
    <div>
      <div>
        <StatisticsTotal />
      </div>
      <Select />
      <div>
        <_Flex>
          <StatisticsComment />
          <StatisticsLike />
        </_Flex>
        <_Flex>
          <StatisticsSubscribe />
          <StatisticsView />
        </_Flex>
        <_Box>
          <StatisticsWeekend />
        </_Box>
      </div>
    </div>
  );
}
