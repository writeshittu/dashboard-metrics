import React from "react";
import styled from "styled-components";
import { items } from "./mockData";

const Timeline = () => {
  

  return (
    <TimelineContainer>
        <Title>Activities</Title>
      {items?.map((item, index) => (
        <TimelineItem key={index}>
          <Avatar>
            <img src={item.avatar} alt="name" />
          </Avatar>
          <Content>
            <Title>{item.title}</Title>
            <Timestamp>{item.timestamp}</Timestamp>
          </Content>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;

const TimelineContainer = styled.div`
  padding: 24px 0 ;
  margin: 20px 0;
`;

const TimelineItem = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 15px;
    top: 38px;
    bottom: 5px;
    width: 1px;
    background: #1c1c1c1a;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  img {
    width: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.color || "#e1e1e1"};
    /* flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px; */
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
& :hover{
    transition: all 1ms;

}
`;

const Title = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: #888;
`;
