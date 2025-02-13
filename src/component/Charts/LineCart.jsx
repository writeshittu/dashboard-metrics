import React, { useState } from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";


const ComparisonChart = () => {
  const [activeMetric, setActiveMetric] = useState("Total Users");

  const data = [
    { month: "Jan", thisYear: 10000, lastYear: 5000 },
    { month: "Feb", thisYear: 5000, lastYear: 8000 },
    { month: "Mar", thisYear: 8000, lastYear: 15000 },
    { month: "Apr", thisYear: 15000, lastYear: 5000 },
    { month: "May", thisYear: 25000, lastYear: 10000 },
    { month: "Jun", thisYear: 18000, lastYear: 12000 },
    { month: "Jul", thisYear: 20000, lastYear: 22000 },
  ];

  const metrics = ["Total Users", "Total Projects", "Operating Status"];

  return (
    <ChartContainer>
        <ChartHeader>

      <MetricsContainer>
        {metrics.map((metric) => (
          <MetricButton
            key={metric}
            active={activeMetric === metric}
            onClick={() => setActiveMetric(metric)}
          >
            {metric}
          </MetricButton>
        ))}
      </MetricsContainer>

      <LegendContainer>
        <LegendItem>
          <LegendDot color="#1C1C1C" />
          <LegendText>This year</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendDot color="#A8C5DA" />
          <LegendText>Last year</LegendText>
        </LegendItem>
      </LegendContainer>
        </ChartHeader>

      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF" }}
              ticks={[0, 10000, 20000, 30000]}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip
            // content={value}
              contentStyle={{
                background: "white",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#111827" }}
            />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#00000066"
              strokeWidth={1}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#A8C5DA"
              strokeWidth={1}
              strokeDasharray="3 3"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartContainer>
  );
};

export default ComparisonChart;


const ChartContainer = styled.div`
  padding: 24px;
  background: #F7F9FB;
  border-radius: 8px;
  flex: 1;
`;

const ChartHeader=styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
const MetricsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const MetricButton = styled.button`
  padding: 4px ;
  font-size: 14px;
  border: none;
  line-height: 20px;
  background: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#1c1c1c" : "#1c1c1c66")};
  transition: color 0.2s ease;

  &:hover {
    color: #1c1c1c;
  }
`;

const LegendContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const LegendText = styled.span`
  font-size: 14px;
  color: #1C1C1C;
`;

const ChartWrapper = styled.div`
  height: 256px;
`;