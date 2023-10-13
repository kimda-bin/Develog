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
} from "recharts";

export default function StatisticsView() {
  const MonthData = [
    {
      name: "1월",
      view: 100,
    },
    {
      name: "2월",
      view: 202,
    },
    {
      name: "3월",
      view: 56,
    },
    {
      name: "4월",
      view: 75,
    },
    {
      name: "5월",
      view: 84,
    },
    {
      name: "6월",
      view: 286,
    },
    {
      name: "7월",
      view: 103,
    },
    {
      name: "8월",
      view: 156,
    },
    {
      name: "9월",
      view: 182,
    },
    {
      name: "10월",
      view: 214,
    },
    {
      name: "11월",
      view: 231,
    },
    {
      name: "12월",
      view: 105,
    },
  ];
  return (
    <div style={{ fontSize: "10px" }}>
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
        <Legend />
        <Bar dataKey="view" fill="#3A5FFF" />
      </BarChart>
    </div>
  );
}
