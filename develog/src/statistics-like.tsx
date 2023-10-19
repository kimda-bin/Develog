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

export default function StatisticsLike() {
  const MonthData = [
    {
      name: "1월",
      like: 43,
    },
    {
      name: "2월",
      like: 32,
    },
    {
      name: "3월",
      like: 25,
    },
    {
      name: "4월",
      like: 51,
    },
    {
      name: "5월",
      like: 34,
    },
    {
      name: "6월",
      like: 74,
    },
    {
      name: "7월",
      like: 65,
    },
    {
      name: "8월",
      like: 81,
    },
    {
      name: "9월",
      like: 45,
    },
    {
      name: "10월",
      like: 74,
    },
    {
      name: "11월",
      like: 42,
    },
    {
      name: "12월",
      like: 65,
    },
  ];

  return (
    <_Container>
      <_Title>좋아요</_Title>
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
            <Bar dataKey="like" fill="#4d1954" />
          </BarChart>
        </div>
      </_ChartBox>
    </_Container>
  );
}
