import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
// Sample data for bar chart
const barChartData = [
  { name: "Linux", value: 15, fill: "#95A4FC" },
  { name: "Mac", value: 25, fill: "#BAEDBD" },
  { name: "iOS", value: 20, fill: "#1C1C1C" },
  { name: "Windows", value: 30, fill: "#B1E3FF" },
  { name: "Android", value: 12, fill: "#A8C5DA" },
  { name: "Other", value: 22, fill: "#A1E3CB" },
];
const Barchart = ({ title , data = barChartData }) => {
  return (
    <Wrapper>
      <p className="title">{title}</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            tickMargin={10}
            ticks={[0,10,20,30]}
            tickFormatter={(value) => `${value}K`}
            axisLine={false}
          />
          {/* <Tooltip/> */}
          <Bar dataKey="value" fill="#8884d8" radius={8} width={30} />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Barchart;

const Wrapper = styled.section`
  flex: 1;
  padding: 4px;
  background-color: #f7f9fb;
  border-radius: 8px;
  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding: 20px;
    color: #1c1c1c;
    margin-bottom: 20px;
  }
`;
