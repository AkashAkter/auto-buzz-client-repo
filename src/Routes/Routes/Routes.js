import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import AudiItems from "../../Pages/Items/AudiItems/AudiItems";
import CarDetails from "../../Pages/Items/CarDetails/CarDetails";
import HondaItems from "../../Pages/Items/HondaItems/HondaItems";
import MercedesItems from "../../Pages/Items/MercedesItems/MercedesItems";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/audis',
                element: <AudiItems></AudiItems>
            },
            {
                path: '/audis/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/audis/${params.id}`)
            },
            {
                path: '/hondas',
                element: <HondaItems></HondaItems>
            },
            {
                path: '/hondas/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/hondas/${params.id}`)
            },
            {
                path: '/mercedes',
                element: <MercedesItems></MercedesItems>
            },
            {
                path: '/mercedess/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/mercedess/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ]
    }
])