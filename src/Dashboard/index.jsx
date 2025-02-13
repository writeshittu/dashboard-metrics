import React from "react";
import {
  DashboardContainer,
  LineChartSection,
  MainContent,
  MainWrapper,
  MarketingContainer,
  MetricsContainer,
  RightSideSection,
} from "../Styles/DashboradStyles";
import Sidebar from "../component/sidebar";
import { MetricsGrid } from "./styles";
import Header from "../component/navBar";
import MetricsCard from "../component/metricsCard";
import Arrowrise from "../assets/Arrowrise";
import ArrowFal from "../assets/ArrowFall";
import ContactsDetail from "../component/contactCardList";
import Timeline from "../component/Timeline";
import TrafficPieChart from "../component/Charts/PieChart";
import Barchart from "../component/Charts/Barchart";
import { marketingData } from "../component/mockData";
import ComparisonChart from "../component/Charts/LineCart";
import TrafficByWebsite from "../component/TrafficByWebsite";
import Notifications from "../component/Notifications";

const Dashboard = () => {
  const metrics = [
    {
      label: "Requests",
      value: "7,265",
      change: "+11.02%",
      primary: true,
      icon: <Arrowrise />,
    },
    { label: "KYC", value: "3,671", change: "-0.03%", icon: <ArrowFal /> },
    {
      label: "Tasks",
      value: "156",
      change: "+15.03%",
      primary: true,
      icon: <Arrowrise />,
    },
    {
      label: "Customers",
      value: "2,318",
      change: "+6.08%",
      icon: <ArrowFal />,
    },
  ];

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <MainWrapper>
          <MetricsContainer>
            <MetricsGrid>
              {metrics.map((metric, index) => (
                <MetricsCard
                  key={index}
                  label={metric.label}
                  value={metric.value}
                  change={metric.change}
                  primary={metric.primary}
                  icon={metric.icon}
                />
              ))}
            </MetricsGrid>
            <LineChartSection>
              <ComparisonChart />
              <TrafficByWebsite />
            </LineChartSection>

            <div style={{ display: "flex", gap: "24px" }}>
              <Barchart title="Reports Generated" />
              <TrafficPieChart title="Traffic by Location" />
            </div>
            <MarketingContainer>
              <Barchart title="Marketing & SEO" data={marketingData} />
            </MarketingContainer>
          </MetricsContainer>
          <RightSideSection>
            <Notifications />
            <Timeline />
            <ContactsDetail />
          </RightSideSection>
        </MainWrapper>
      </MainContent>
    </DashboardContainer>
  );
};
export default Dashboard;
