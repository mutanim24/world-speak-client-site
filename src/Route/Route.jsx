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
      element: <Dashboard></Dashboard>,
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
        {
          path: 'add-class',
          element: <AddClass></AddClass>
        },
        {
          path: 'selected-class',
          element: <SelectedClass></SelectedClass>
        }
      ]
    }
  ]);