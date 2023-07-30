import { Link } from "react-router-dom";

export const Links = (props) => {
  const { to, name } = props;
  return (
    <li>
      <Link to={to}>{name}</Link>
    </li>
  );
};
