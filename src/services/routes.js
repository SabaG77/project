import {
  Home,
  Products,
  ProductDetails,
  AddProduct,
  Contact,
  EditProduct,
  Favorites,
} from "../pages";

export const allRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:prID",
    element: <ProductDetails />,
  },
  {
    path: "/products/category/:catURL",
    element: <Products />,
  },
  {
    path: "/sell-product",
    element: <AddProduct />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/edit-product/:prID",
    element: <EditProduct />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
];
