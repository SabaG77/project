import { useEffect, useState } from "react";
import { api } from "../../services";
import { Links } from "../../globalComponents";
import { useParams } from "react-router-dom";
import { CatDiv } from "./components";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { catURL } = useParams();
  useEffect(() => {
    let category = "";
    if (catURL) {
      category = `/category/${catURL}`;
    }

    const fetchData = async () => {
      const prData = await api._get(
        `https://dummyjson.com/products${category}?limit=10`
      );
      if (prData.status === 200) {
        setProducts(prData.data.products);
      }
    };
    fetchData();
  }, [catURL]);
  return (
    <div className="products-main">
      <CatDiv />
      {products.map((pr, index) => (
        <div key={index}>
          <img src={pr.thumbnail} alt={pr.title} />
          <h2>
            {pr.title} — {pr.category}
          </h2>
          <p>
            {pr.price}$ — {pr.rating}
          </p>
          <Links to={`/products/${pr.id}`} name={"see more"} />
        </div>
      ))}
    </div>
  );
};
