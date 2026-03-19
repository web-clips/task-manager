const ListItem = ({ item }) => {
  const { name, iconSrc, path } = item;
  return (
    <li>
      <a href="">
        <img src={iconSrc} alt="" />
        {name}
      </a>
    </li>
  );
};

export default ListItem;
