import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from "recharts";
import Select from "./select";
import styled from "styled-components";
import img from "./img/statistics.png";

const _ChartBox = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 20px;
  font-weight: bold;
`;

const _Title = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-weight: bold;
  font-size: 18px;
  padding-left: 50px;
  margin-top: 20px;
`;

export default function StatisticsWeekend() {
  const Data = [
    {
      name: "2019",
      like: 206,
      comment: 107,
      subscribe: 20,
      view: 403,
    },
    {
      name: "2020",
      like: 254,
      comment: 135,
      subscribe: 13,
      view: 423,
    },
    {
      name: "2021",
      like: 229,
      comment: 102,
      subscribe: 26,
      view: 475,
    },
    {
      name: "2022",
      like: 245,
      comment: 152,
      subscribe: 16,
      view: 426,
    },
    {
      name: "2023",
      like: 185,
      comment: 184,
      subscribe: 8,
      view: 400,
    },
  ];

  return (
    <div>
      <_Title>년도별 총합</_Title>
      <_ChartBox>
        <div>
          <LineChart
            width={600}
            height={250}
            data={Data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="like" stroke="#22741C" />
            <Line type="monotone" dataKey="view" stroke="#1c4274" />
            <Line type="monotone" dataKey="comment" stroke="#741c2f" />
            <Line type="monotone" dataKey="subscribe" stroke="#4d1954" />
          </LineChart>
        </div>
      </_ChartBox>
    </div>
  );
}
