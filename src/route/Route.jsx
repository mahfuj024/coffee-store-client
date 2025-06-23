import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Error from "../components/Error";
import Home from "../pages/Home";
import BannerDetails from "../pages/BannerDetails";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            { index: true, Component: Home },
            { path: "bannerdetails", Component: BannerDetails },
            {
                path : "other_products",
                loader : () => fetch("https://fakestoreapi.com/products"),
                Component : Products
            },
            {
                path : "productDetaila/:id",
                loader : ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`),
                Component : ProductDetails
            }
        ]
    },
]);