import { Links } from "../../../globalComponents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FavoritesContext } from "../../../services/contexts";
import { useContext } from "react";
export const Product = (props) => {
  const { products } = props;

  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index}>
          <img src={product.thumbnail} alt={product.title} />
          <FavoriteIcon
            onClick={() => toggleFavorite(product.id)}
            sx={{ color: isFavorite(product.id) ? "#27009c" : "#b1b1b1" }}
          />
          <ShoppingCartIcon />
          <h2>
            <p className="product-title">
              {product.title} — {product.category}
            </p>
          </h2>
          <p>
            {product.price}$ — {product.rating}
          </p>
          <Links to={`/products/${product.id}`} name={"See More"} />
          <Links to={`/edit-product/${product.id}`} name={"Edit"} />
        </div>
      ))}
    </div>
  );
};
