import { useEffect, useState } from "react";
import { api } from "../../services";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { prID } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const singlerPrData = await api._get(
        `https://dummyjson.com/products/${prID}`
      );
      if (singlerPrData.status === 200) {
        setProduct(singlerPrData.data);
      }
    };
    fetchData();
  }, [prID]);
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p>
        price: {product.price}$ rating: {product.rating}
      </p>
      <p>{product.stock} items in stock</p>
    </div>
  );
};
