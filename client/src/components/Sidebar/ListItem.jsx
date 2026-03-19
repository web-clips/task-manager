import { NavLink } from 'react-router-dom'
const ListItem = ({ name, icon, path }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "sidebar__link__active" : ""}
      >
        {icon}
        {name}
      </NavLink>
    </li>
  );
};

export default ListItem;
