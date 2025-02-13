import React from "react";
import styled from "styled-components";
import { notifications } from "./mockData";

const Container = styled.div`
  /* padding: 24px; */
  /* max-width: 400px; */
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 24px;
  color: #1c1c1c;
`;

const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const NotificationItem = styled.div`
  display: flex;
  gap: 12px;
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e3f5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Message = styled.span`
  font-size: 12px;
  color: #1c1c1c;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #1c1c1c66;
  line-height: 18px;
`;

const Notifications = () => {
  return (
    <Container>
      <Title>Notifications</Title>
      <NotificationsList>
        {notifications?.map((notification) => (
          <NotificationItem key={notification.id}>
            <IconContainer>
              <img src={notification.icon} />
            </IconContainer>
            <Content>
              <Message>{notification.message}</Message>
              <Timestamp>{notification.timestamp}</Timestamp>
            </Content>
          </NotificationItem>
        ))}
      </NotificationsList>
    </Container>
  );
};

export default Notifications;
