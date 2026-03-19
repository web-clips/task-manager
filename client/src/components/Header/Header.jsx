import Account from "./Account";
import AddTask from "./AddTask";
import "./Header.scss";
import InputSearch from "./InputSearch";
const Header = () => {
  return (
    <header className="header">
      <InputSearch />
      <AddTask />
      <Account />
    </header>
  );
}

export default Header;
