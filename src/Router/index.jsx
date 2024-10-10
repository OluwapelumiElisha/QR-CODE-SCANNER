import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Auth/Login/Compenents/LoginForm";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginForm/>,
        children: [
          {
            index: true,
            element: <LoginForm/>,
          },
        ],
      },
])