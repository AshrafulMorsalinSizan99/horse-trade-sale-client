import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../../Layout/DashBoardLayOut";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllReports from "../../Pages/DashBoard/AllReports/AllReports";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyOrder from "../../Pages/DashBoard/MyOrder/MyOrder";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Homepage/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({ params }) => fetch(`https://horse-trade-sale-server.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allreports',
                element: <AdminRoute><AllReports></AllReports></AdminRoute>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://horse-trade-sale-server.vercel.app/bookings/${params.id}`)
            // },
        ]
    }
])

export default router;