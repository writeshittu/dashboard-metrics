import styled from "styled-components";

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 32px;
  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) 
  }

`;