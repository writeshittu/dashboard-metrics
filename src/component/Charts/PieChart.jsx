import React from "react";
import {
  Pie,
  ResponsiveContainer,
  PieChart,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import styled from "styled-components";

const pieData = [
  { name: "Nigeria", value: 56.6, fill: "#1C1C1CCC" },
  { name: "Ghana", value: 22.5, fill: "#BAEDBD" },
  { name: "Kenya", value: 20.8, fill: "#B1E3FF" },
  { name: "Benin Republic", value: 8.1, fill: "#95A4FC" },
];
const TrafficPieChart = ({ title, data = pieData }) => {
  return (
    <Wrapper>
      <p className="title">{title}</p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx={120}
            cy={120}
            innerRadius={40}
            outerRadius={85}
            paddingAngle={3}
            dataKey="value"
          >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} radius={16} fill={entry?.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            formatter={(value, entry) => (
              <span className="lengend_title">
                {value} {entry.payload.value}%
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default TrafficPieChart;

const Wrapper = styled.section`
  width: 380px;
  background: #f7f9fb;
  border-radius: 8px;
  & .recharts-legend-wrapper {
    margin-top: -30px;
    .recharts-default-legend {
      > li {
        margin: 12px 6px;
        & svg {
          height: 8px;
          width: 8px;
        }
        .lengend_title {
          font-weight: 400;
          font-size: 12px;
          padding: 12px 0;
          line-height: 18px;
          color: #c1c1c1;
        }
      }
    }
  }
  .title {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding: 20px;
    color: #1c1c1c;
    margin-bottom: 20px;
  }
`;
