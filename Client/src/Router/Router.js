import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import {createBrowserRouter} from "react-router-dom"

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        path: "/",
        children: [
            {
                element: <Home/>,
                path: "/"
            }
        ]
    }
])