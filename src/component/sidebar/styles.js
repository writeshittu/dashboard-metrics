import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 260px;
  background: white;
  padding: 24px;
  border-right: 1px solid #f0ecec;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-bottom: 32px;
  img {
    height: 32px;
    text-align: center;
  }
`;

export const NavMenu = styled.nav`
  flex: 1;
`;
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 8px 0;
  background-color: #f0ecec;
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  font-family: "IBM plex sans";
  font-size: 14px;
  padding: 12px 16px;
  color: ${(props) => (props.active ? "#161716" : "#292D32")};
  background: ${(props) => (props.active ? "#f0f7ff" : "transparent")};
  border-radius: 8px;
  margin-bottom: 4px;
  text-decoration: none;
  font-weight: ${(props) => (props.active ? "600" : "normal")};

  &:hover {
    background: #f8f9fa;
  }

  svg {
    margin-right: 12px;
    width: 20px;
    height: 20px;
  }
  .userAvater {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;
