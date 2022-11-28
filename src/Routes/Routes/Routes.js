import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct";
import MyBuyer from "../../Pages/Dashboard/SellerDashboard/MyBuyer";
import MyProduct from "../../Pages/Dashboard/SellerDashboard/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import AudiItems from "../../Pages/Items/AudiItems/AudiItems";
import CarDetails from "../../Pages/Items/CarDetails/CarDetails";
import HondaItems from "../../Pages/Items/HondaItems/HondaItems";
import MercedesItems from "../../Pages/Items/MercedesItems/MercedesItems";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import WrongRoute from "../../Pages/WrongRoute/WrongRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                element: <PrivateRoute><AudiItems></AudiItems></PrivateRoute>
            },
            {
                path: '/audis/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`https://auto-buzz-server-site.vercel.app/audis/${params.id}`)
            },
            {
                path: '/hondas',
                element: <PrivateRoute><HondaItems></HondaItems></PrivateRoute>
            },
            {
                path: '/hondas/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`https://auto-buzz-server-site.vercel.app/hondas/${params.id}`)
            },
            {
                path: '/mercedes',
                element: <PrivateRoute><MercedesItems></MercedesItems></PrivateRoute>
            },
            {
                path: '/mercedess/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`https://auto-buzz-server-site.vercel.app/mercedess/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },
            {
                path: '/dashboard/myBuyer',
                element: <MyBuyer></MyBuyer>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://auto-buzz-server-site.vercel.app/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <WrongRoute></WrongRoute>
    }
])