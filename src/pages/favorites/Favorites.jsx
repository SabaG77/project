import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { FavoritesContext } from "../../services/contexts";
import { Product } from "../products/components";

export const Favorites = () => {
  const [favs, setFavs] = useState([]);

  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await api._get("https://dummyjson.com/products");
      if (apiData.status === 200) {
        let filteredFavs = apiData.data.products.filter((item) =>
          favorites.includes(item.id)
        );
        setFavs(filteredFavs);
      }
    };
    fetchData();
  }, [favorites]);

  return (
    <div>
      <h1>Your Favorites:</h1>
      <Product products={favs} />
    </div>
  );
};
