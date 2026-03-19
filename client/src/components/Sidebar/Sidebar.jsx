import { LayoutDashboard, SquareCheckBig, CircleCheck, Settings } from 'lucide-react';
import logo from "../../assets/logo.svg";
import ListItem from "./ListItem";
import "./Sidebar.scss";
import { NavLink } from 'react-router-dom';
import UserPanel from './UserPanel';

const Sidebar = () => {
  const listItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/dashboard", },
    { name: "My Tasks", icon: <SquareCheckBig size={20} />, path: "/my-tasks" },
    { name: "Completed", icon: <CircleCheck size={20} />, path: "/completed" },
    { name: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <NavLink to="/dashboard">
          <img src={logo} alt="" />
          <span>Planix</span>
        </NavLink>
      </div>
      <nav className="sidebar__nav">
        <ul>
          {listItems.map((item, index) => (
            <ListItem key={index} {...item}/>
          ))}
        </ul>
      </nav>
      <div className="sidebar__user__panel">
        <UserPanel/>
      </div>
    </aside>
  );
};

export default Sidebar;
