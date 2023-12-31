import { useState, useEffect } from "react";
import { Links } from "../../../globalComponents";
import { api } from "../../../services";

export const CatDiv = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const catData = await api._get(
        "https://dummyjson.com/products/categories"
      );
      if (catData) {
        setCategories(catData.data);
      }
    };
    getData();
  }, []);
  return (
    <div className="catDiv">
      <h2>categories:</h2>
      <div className="product-container">
        {categories.map((cat, index) => (
          <Links key={index} to={`/products/category/${cat}`} name={cat} />
        ))}
      </div>
    </div>
  );
};
