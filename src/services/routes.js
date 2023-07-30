import {
  Home,
  Products,
  ProductDetails,
  AddProduct,
  Contact,
  AboutUs,
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
    path: "/about-us",
    element: <AboutUs />,
  },
];