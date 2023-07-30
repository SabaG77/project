import { useState } from "react";
import { Buttons } from "../../globalComponents";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" value={title} onChange={changeTitle} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            value={price}
            onChange={changePrice}
            placeholder="0.00"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea value={description} onChange={changeDescription} />
        </div>
        <div>
          <Buttons type="submit" name="Add Product" />
        </div>
      </form>
    </div>
  );
};
