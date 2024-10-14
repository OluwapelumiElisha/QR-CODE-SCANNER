import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Auth/Login/Compenents/LoginForm";
import Error from "../MainPage/ErrorPage/index";
import ContEmail from "../Auth/ContinueEmail/index";
import SignUp from "@/Auth/SignUp/Component/SignUp";



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
        path: "*",
        element: <Error/>,
      },
      {
        path: "/Login",
        element : <LoginForm/>
      },
      {
        path : '/SignUp',
        element : <SignUp/>
      }
])