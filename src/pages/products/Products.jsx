import { useEffect, useState } from "react";
import { api } from "../../services";
import { Product } from "./components";
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
        `https://dummyjson.com/products${category}?limit=12`
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
      <Product products={products} />
    </div>
  );
};
