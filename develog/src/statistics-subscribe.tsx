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
} from "recharts";
import Select from "./select";
import styled from "styled-components";

const _ChartBox = styled.div`
  font-size: 10px;
  display: flex;
  margin-top: 20px;
  font-weight: bold;
`;

const _Title = styled.div`
  font-family: "HakgyoansimWoojuR";
  font-weight: bold;
  font-size: 18px;
  padding-left: 50px;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function StatisticsSubscribe() {
  const MonthData = [
    {
      name: "1월",
      subscribe: 3,
    },
    {
      name: "2월",
      subscribe: 4,
    },
    {
      name: "3월",
      subscribe: 2,
    },
    {
      name: "4월",
      subscribe: 9,
    },
    {
      name: "5월",
      subscribe: 9,
    },
    {
      name: "6월",
      subscribe: 4,
    },
    {
      name: "7월",
      subscribe: 8,
    },
    {
      name: "8월",
      subscribe: 6,
    },
    {
      name: "9월",
      subscribe: 5,
    },
    {
      name: "10월",
      subscribe: 3,
    },
    {
      name: "11월",
      subscribe: 3,
    },
    {
      name: "12월",
      subscribe: 4,
    },
  ];

  return (
    <_Container>
      <_Title>구독</_Title>
      <_ChartBox>
        <div>
          <BarChart
            width={300}
            height={200}
            data={MonthData}
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
            <Bar dataKey="subscribe" fill="#741c2f" />
          </BarChart>
        </div>
      </_ChartBox>
    </_Container>
  );
}
