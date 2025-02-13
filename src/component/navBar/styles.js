import styled from 'styled-components';

export const HeaderContainer = styled.header`
position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 18px;
  border-bottom:1px solid #f0ecec;
  p {
  font-family: IBM plex Sans;
  font-size:22px;
  font-weight:500;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding: 8px 16px 8px 40px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    width: 240px;
  }

  svg {
    position: absolute;
    left: 12px;
    color: #94a3b8;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: white;
    border: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: #f8f9fa;
    }
  
  }
`;


