import React from "react";
import "./fonts/Font.css";
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

export default function StatisticsComment() {
  const MonthData = [
    {
      name: "1월",
      comment: 53,
    },
    {
      name: "2월",
      comment: 62,
    },
    {
      name: "3월",
      comment: 46,
    },
    {
      name: "4월",
      comment: 74,
    },
    {
      name: "5월",
      comment: 65,
    },
    {
      name: "6월",
      comment: 58,
    },
    {
      name: "7월",
      comment: 68,
    },
    {
      name: "8월",
      comment: 74,
    },
    {
      name: "9월",
      comment: 59,
    },
    {
      name: "10월",
      comment: 56,
    },
    {
      name: "11월",
      comment: 62,
    },
    {
      name: "12월",
      comment: 61,
    },
  ];

  return (
    <_Container>
      <_Title>댓글</_Title>
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
            <Bar dataKey="comment" fill="#22741C" />
          </BarChart>
        </div>
      </_ChartBox>
    </_Container>
  );
}
