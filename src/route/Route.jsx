import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Error from "../components/Error";
import Home from "../pages/Home";
import BannerDetails from "../pages/BannerDetails";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import AddCoffee from "../pages/AddCoffee";
import DisplayCoffee from "../pages/DisplayCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import CoffeeUpdate from "../pages/CoffeeUpdate";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            { index: true, Component: Home },
            { path: "bannerdetails", Component: BannerDetails },
            {
                path: "other_products",
                loader: () => fetch("https://fakestoreapi.com/products"),
                Component: Products
            },
            {
                path: "productDetaila/:id",
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/${params.id}`),
                Component: ProductDetails
            },
            {
                path: "addcoffee",
                Component: AddCoffee
            },
            {
                path: "coffeedetails/:id",
                loader: ({ params }) => fetch(`http://localhost:4000/coffees/${params.id}`),
                Component: CoffeeDetails
            },
            {
                path: "coffeeupdate/:id",
                loader: ({ params }) => fetch(`http://localhost:4000/coffees/${params.id}`),
                Component: CoffeeUpdate
            },
            { path: "signup", Component: Signup },
            { path: "login", Component: Login }
        ]
    },
]);