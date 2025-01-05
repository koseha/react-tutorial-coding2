
export const NavItem = ({item, active}) => {
  const className = `nav-item ${active}`;

  return (
    <li className={className} key={item.key}>
      <a href={item.path}>
        <img src={item.iconSrc}></img>
        {item.label}
      </a>
    </li>
  )
}