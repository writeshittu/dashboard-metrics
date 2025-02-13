import styled from "styled-components";

export const Card = styled.div`
  background: ${(props) => (props.primaryBlue ? "#E3F5FF" : "#E5ECF6")};
  border-radius: 12px;
  padding: 24px;
  min-width: 190px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .label {
    color: #1c1c1c;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .value {
    font-size: 24px;
    font-weight: 600;
    color: #1c1c1c;
  }

  .change {
    font-size: 12px;
    line-height: 18px;
    color: #1c1c1c;
  }
`;
