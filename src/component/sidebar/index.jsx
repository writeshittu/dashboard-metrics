import React from "react";
import { SidebarContainer, Logo, NavMenu, NavItem, Divider } from "./styles";
import logo from "../../assets/Logo.svg";
import DashboardIcon from "../../assets/DashboardIcon";
import TimerIcon from "../../assets/TimerIcon";
import KycIcon from "../../assets/KycIcon";
import Report from "../../assets/Report";
import TaskIcon from "../../assets/TaskIcon"; 
import LinkIcon from "../../assets/LinkIcon";
import CustomerIcon from "../../assets/CustomerIcon";
import UserIcon from "../../assets/UserIcon";
import SecurityIcon from "../../assets/SecurityIcon";
import AdminIcon from "../../assets/AdminIcon";

const Sidebar = () => {
  const menuItem = [
    { id: 1, title: "Dashboard", link: "#", icon: <DashboardIcon /> },
    {
      id: 2,
      title: "Requests",
      link: "#",
      icon: <TimerIcon />,
      showDivider: true,
    },
    { id: 3, title: "KYC", link: "#", icon: <KycIcon /> },
    { id: 4, title: "Reports", link: "#", icon: <Report /> },
    { id: 5, title: "Tasks", link: "#", icon: <TaskIcon />, showDivider: true },
    { id: 6, title: "Audit Trails", link: "#", icon: <LinkIcon /> },
    { id: 7, title: "Customers", link: "#", icon: <CustomerIcon />, showDivider: true },
    { id: 8, title: "Users", link: "#", icon: <UserIcon /> },
    { id: 9, title: "Settings", link: "#", icon: <SecurityIcon /> },
    { id: 10, title: "Administration", link: "#", icon: <AdminIcon /> },
  ];
  return (
    <SidebarContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <NavMenu>
        {menuItem.map((i, idx) => (
          <>
          <NavItem key={i.id} href={i.link} active={idx === 0}>
            {i.icon} {i.title}
          </NavItem>
          {i.showDivider && <Divider></Divider>}
          </>
        ))}
      </NavMenu>
      <NavItem href="#">
        <img className="userAvater" src="/byeWind.svg" alt="User" />
        <span>ByeWind</span>
      </NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;
