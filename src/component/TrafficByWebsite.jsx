import React from "react";
import styled from "styled-components";
import { websiteData } from "./mockData";

const Container = styled.div`
  padding: 24px;
  background: #F7F9FB;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #1c1c1c;
`;

const TrafficList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const WebsiteItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const WebsiteName = styled.span`
  font-size: 12px;
  color: #1c1c1c;
`;

const BarContainer = styled.div`
  display: flex;
  gap: 4px;
  flex: 1;

`;

const Bar = styled.div`
  height: 4px;
  background-color: ${(props) => (props.dark ? "#1c1c1c" : "#1c1c1c66")};
  border-radius: 2px;
  width: ${(props) => props.width}%;
`;

const TrafficByWebsite = () => {
  return (
    <Container>
      <Title>Traffic by Website</Title>
      <TrafficList>
        {websiteData.map((site) => (
          <WebsiteItem key={site.name}>
            <WebsiteName>{site.name}</WebsiteName>
            <BarContainer>
              <Bar dark width={site.traffic[0]} />
              <Bar width={site.traffic[1]} />
            </BarContainer>
          </WebsiteItem>
        ))}
      </TrafficList>
    </Container>
  );
};

export default TrafficByWebsite;
