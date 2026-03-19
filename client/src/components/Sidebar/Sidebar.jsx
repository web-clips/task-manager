import logo from "../../assets/logo.svg";
import ListItem from "./ListItem";
import "./Sidebar.scss";

const Sidebar = () => {
  const listItems = [
    { name: "Dashboard", iconSrc: "/dashboard.svg", path: "/dashboard" },
    { name: "Board", iconSrc: "/board.svg", path: "/board" },
    { name: "Team", iconSrc: "/team.svg", path: "/team" },
    { name: "Settings", iconSrc: "/settings.svg", path: "/settings" },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <a href="">
          <img src={logo} alt="" />
          <span>Planix</span>
        </a>
      </div>
      <nav className="sidebar__nav">
        <ul>
          {listItems.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </ul>
      </nav>
      <div className="sidebar__account"></div>
    </aside>
  );
};

export default Sidebar;
