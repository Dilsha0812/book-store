import {createBrowserRouter} from "react-router-dom";
import App from "../App"
import Home from "../pages/home/home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import CheckOutPage from "../pages/books/CheckOutPage";
import SingleBook from "../pages/books/SingleBook";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
// import OrderPage from "../pages/books/orderPage";





const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:"/",
            element:<Home/>,
        },
        {
            path: "/orders",
            element: <div className="text-2xl font-semibold mb-4 flex justify-between items-center">Your orders are successfull</div>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login/>
       },
       {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      },
      {
        path: "/checkout",
        element: <PrivateRoute><CheckOutPage/></PrivateRoute>
      },
      {
        path: "/books/:id",
        element: <SingleBook/>
      },
    ],
    },
    {
      path:"/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path:"",
          element: <AdminRoute><div>Dashboard Home</div></AdminRoute>
        },
        {
          path:"add-new-book",
          element: <AdminRoute><div>Add new book</div></AdminRoute>
        },
        {
          path:"edit-book/:id",
          element: <AdminRoute><div>Edit Book</div></AdminRoute>
        },
        {
          path:"manage-books",
          element: <AdminRoute><div>Manage Book</div></AdminRoute>
        },
       
      ],
    },
  ]);


  export default router;