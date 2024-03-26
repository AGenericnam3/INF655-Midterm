import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
    { path: "/", element: <div>Home</div> }, // Home page
    //{ path: "/search", element: <div>Search</div> }, // Search page
    { path: "/components/product", element: <div>Product</div> }, // Product Detail page
    { path: "/components/cart", element: <div>Cart</div> }, // Cart page
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);