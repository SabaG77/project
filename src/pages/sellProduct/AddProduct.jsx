import { useState } from "react";
import { Buttons, InputDiv, TextAreaDiv } from "../../globalComponents";

export const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const changeTitle = (e) => {
    let titleValue = e.target.value;
    if (titleValue.length <= 12) {
      setTitle(titleValue);
    }
  };

  const changePrice = (e) => {
    let priceValue = e.target.value;
    priceValue = priceValue.replace(/[^\d.-]/g, "");
    let dotCount = priceValue.split(".");
    if (
      dotCount.length > 2 ||
      (dotCount[1] && dotCount[1].length > 2) ||
      (dotCount[0] && parseInt(dotCount[0]) > 1000)
    ) {
      return;
    }
    setPrice(priceValue);
  };

  const changeDescription = (e) => {
    let descValue = e.target.value;
    if (descValue.length <= 120) {
      setDescription(descValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiData = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
      }),
    });
    if (apiData.status === 200) {
      alert("Product Added Successfully");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputDiv
          htmlFor="title"
          name="Title"
          inType="text"
          inValue={title}
          inOnChange={changeTitle}
        />
        <InputDiv
          htmlFor="price"
          name="Price"
          inType="text"
          inValue={price}
          inOnChange={changePrice}
          inPlaceHolder="0.00"
        />
        <TextAreaDiv
          htmlFor="description"
          name="Description"
          value={description}
          onChange={changeDescription}
        />
        <div>
          <Buttons type="submit" name="Add Product" />
        </div>
      </form>
    </div>
  );
};
