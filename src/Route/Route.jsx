import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllClasses from "../pages/AllClasses/AllClasses";
import Instructor from "../pages/Instructor/Instructor";
import FourZeroFour from "../pages/FourZeroFour/FourZeroFour";
import Dashboard from "../Layout/Dashboard";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import PrivateRoute from "./PrivateRoute";
import UpdateClass from "../pages/Dashboard/MyClass/UpdateClass";
import Feedback from "../pages/Dashboard/ManageClass/Feedback";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <FourZeroFour></FourZeroFour>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/classes',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/instructor',
        element: <Instructor></Instructor>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // admin
      {
        path: 'manage-class',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'manage-user',
        element: <ManageUser></ManageUser>
      },
      // instructor route
      {
        path: 'add-class',
        element: <AddClass></AddClass>
      },
      {
        path: 'my-class',
        element: <MyClass></MyClass>
      },
      {
        path: 'my-class/:id',
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`https://world-speak-server-site.vercel.app/my-class/${params.id}`)
      },
      // student route
      {
        path: 'selected-class',
        element: <SelectedClass></SelectedClass>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: 'enrolled-class',
        element: <EnrolledClass></EnrolledClass>
      },
      {
        path: 'update-class/:id',
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`https://world-speak-server-site.vercel.app/update-class/${params.id}`)
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'feedback',
        element: <Feedback></Feedback>
      }
    ]
  }
]);