import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Buttons } from "../../globalComponents";
import * as Yup from "yup";

export const EditProduct = () => {
  const { prID } = useParams();
  const [initialValues, setInitialValues] = useState({
    title: "",
    price: "",
    description: "",
    thumbnail: "",
    category: "",
  });
  const [price, setPrice] = useState("");
  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Required")
      .max(12, "must be 12 characters or less"),
    price: Yup.number().required("Required"),
    description: Yup.string().required("Required"),
    thumbnail: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
  });
  const handleSubmit = async (values) => {
    values.price = price;
    const apiData = await fetch(`https://dummyjson.com/products/${prID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ values }),
    });
    if (apiData.status === 200) {
      alert("Product Updated Successfully");
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
  useEffect(() => {
    const fetchData = async () => {
      const prData = await api._get(`https://dummyjson.com/products/${prID}`);
      if (prData.status === 200) {
        setInitialValues(prData.data);
      }
    };
    fetchData();
  }, [prID]);
  return (
    <div className="edit">
      <div className="edit-top">
        <h1> Edit Product </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Field
                type="text"
                name="price"
                value={price}
                onChange={changePrice}
              />
              <ErrorMessage name="price" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field type="text" name="description" />
              <ErrorMessage name="description" />
            </div>
            <div>
              <label htmlFor="thumbnail">Thumbnail</label>
              <Field type="text" name="thumbnail" />
              <ErrorMessage name="thumbnail" />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <Field type="text" name="category" />
              <ErrorMessage name="category" />
            </div>
            <div>
              <Buttons type="submit" name="submit" />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
