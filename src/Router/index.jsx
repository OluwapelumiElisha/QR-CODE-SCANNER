import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Auth/Login/Compenents/LoginForm";
import Error from "../MainPage/ErrorPage/index";
import ContEmail from "../Auth/ContinueEmail/index";
import SignUp from "@/Auth/SignUp/Component/SignUp";
import Dashboard from "@/MainPage/Dashboard";
import DashboardLayout from "@/MainPage/Dashboard/Component/DashboardLayout";
import Footer from "@/MainPage/Footer";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <ContEmail/>,
        children: [
          {
            index: true,
            element: <ContEmail/>,
          },
        ],
      },

      
      {
        path: "/Login",
        element : <LoginForm/>
      },
      {
        path : '/SignUp',
        element : <SignUp/>
      },
      {
        path: "*",
        element: <Error/>,
      },
      {
        path: "/Dashboard",
        element: <Dashboard/>,
        children :[
          {
            index: true,
            element: <h1>Congratulation </h1>
          },
          {
            path: 'Scan Code',
            element : <h1>scan code</h1>
          }
        ],
      }
])