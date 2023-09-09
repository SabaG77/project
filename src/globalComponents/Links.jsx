import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const Links = (props) => {
  const { to, name, icon, className } = props;
  return (
    <li>
      <Link to={to} className={className}>
        {icon === "favorites" ? (
          <FavoriteIcon />
        ) : icon === "cart" ? (
          <ShoppingCartIcon />
        ) : (
          name
        )}
      </Link>
    </li>
  );
};
