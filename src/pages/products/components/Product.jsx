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
          <div className="icon-flex">
            <FavoriteIcon
              className="heart-icon"
              onClick={() => toggleFavorite(product.id)}
              sx={{
                color: isFavorite(product.id) ? "#22d1ee" : "#b1b1b1",
                fontSize: "2rem",
                marginRight: ".5rem",
              }}
            />
            <ShoppingCartIcon className="cart-icon" />
          </div>
          <h2>
            <p className="product-title">
              {product.title} — {product.category}
            </p>
          </h2>
          <p className="product-price">
            {product.price}$ — {product.rating}
          </p>
          <Links
            className="btn1"
            to={`/products/${product.id}`}
            name={"See More"}
          />
          <Links
            className="cart-bg"
            to={`/edit-product/${product.id}`}
            name={"Edit"}
          />
        </div>
      ))}
    </div>
  );
};
