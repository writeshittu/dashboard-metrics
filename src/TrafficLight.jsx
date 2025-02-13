import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const TrafficLight = ({ color, activeColor }) => (
  <div>
    <Light color="red" isActive={activeColor === 'red'} />
    <Light color="yellow" isActive={activeColor === 'yellow'} />
    <Light color="green" isActive={activeColor === 'green'} />
  </div>
);

const TrafficLightSystem = () => {
  const [streetALight, setStreetALight] = useState('green');
  const [streetBLight, setStreetBLight] = useState('red');
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const FULL_CYCLE = 10000;
  const HALF_CYCLE = 5000;

  const handleReset = () => {
    setIsRunning(false);
    setStreetALight('green');
    setStreetBLight('red');
    setCycleCount(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCycleCount(prev => (prev + 1) % 4);
      }, HALF_CYCLE);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    switch (cycleCount) {
      case 0:
        setStreetALight('green');
        setStreetBLight('red');
        break;
      case 1:
      case 3:
        setStreetALight('yellow');
        setStreetBLight('yellow');
        break;
      case 2:
        setStreetALight('red');
        setStreetBLight('green');
        break;
    
      default:
        break;
    }
  }, [cycleCount]);

  return (
    <Container>
      <IntersectionBox>
        <Title>Traffic Light System</Title>
        
        <RoadLayout>
          <VerticalRoad />
          <HorizontalRoad />
          
          <TrafficLightContainer className="top">
            <TrafficLight activeColor={streetALight} />
          </TrafficLightContainer>
          <TrafficLightContainer className="bottom">
            <TrafficLight activeColor={streetALight} />
          </TrafficLightContainer>
          <TrafficLightContainer className="left">
            <TrafficLight activeColor={streetBLight} />
          </TrafficLightContainer>
          <TrafficLightContainer className="right">
            <TrafficLight activeColor={streetBLight} />
          </TrafficLightContainer>
          
          <StreetLabel className="top">Street A</StreetLabel>
          <StreetLabel className="right">Street B</StreetLabel>
          
          <ButtonContainer>
            <Button 
              className="start"
              onClick={handleStart}
              disabled={isRunning}
            >
              Start
            </Button>
            <Button 
              className="reset"
              onClick={handleReset}
            >
              Reset
            </Button>
          </ButtonContainer>
        </RoadLayout>
      </IntersectionBox>
    </Container>
  );
};

export default TrafficLightSystem;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: screen;
  padding: 2rem;
  background-color: #f3f4f6;
`;

const IntersectionBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const RoadLayout = styled.div`
  position: relative;
  width: 35rem;
  height: 35rem;
`;

const VerticalRoad = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 8.5rem;
  height: 100%;
  border: 2px solid #FBBF24;
  background-color: #161515;
`;

const HorizontalRoad = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 8.5rem;
  border: 2px solid #FBBF24;
  background-color: #161515;
`;

const TrafficLightContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: .785rem;
  background-color: #f7cf09;
  border-radius: 0.5rem;
  
  &.top {
    top: 20px;
    left: 50%;
    transform: translate(-50%, -1.25rem);
  }
  
  &.bottom {
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 1.25rem);
  }
  
  &.left {
    left: 20%;
    top: 50%;
    transform: translate(-1.25rem, -50%);
  }
  
  &.right {
    right: 20%;
    top: 50%;
    transform: translate(1.25rem, -50%);
  }
`;

const Light = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${props => 
    props.isActive ? 
      (props.color === 'red' ? '#DC2626' : 
       props.color === 'yellow' ? '#e6a603' : 
       '#0bf150') : 
      '#b8a94b'};
`;

const StreetLabel = styled.div`
  position: absolute;
  font-weight: bold;
  
  &.top {
    top: 0.5rem;
    left: 30%;
    transform: translateX(-50%);
  }
  
  &.right {
    right: 0.5rem;
    top: 30%;
    transform: translateY(-50%);
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: white;
  transition: background-color 0.2s;
  
  &.start {
    background-color: #08c541;
    &:hover:not(:disabled) {
      background-color: #0bf150;
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  &.reset {
    background-color:  #08c541;;
    &:hover {
      background-color:  #0bf150;;
    }
  }
`;