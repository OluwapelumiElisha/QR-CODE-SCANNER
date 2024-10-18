import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../Auth/Login/Compenents/LoginForm";
import Error from "../MainPage/ErrorPage/index";
import ContEmail from "../Auth/ContinueEmail/index";
import SignUp from "@/Auth/SignUp/Component/SignUp";
import Dashboard from "@/MainPage/Dashboard";
import QRGenerator from "@/MainPage/Qr Generator/Component/QRGenerator";
import QRG from "@/MainPage/Qr Generator";
import Scanner from "@/MainPage/QR Scanner/Component/Scanner";
import Scanner2 from "@/MainPage/QR Scanner/Component/Scanner2";
import QRHISTORY from "@/MainPage/History/Component/QRHISTORY";


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
            element : <Scanner/>
          },
          {
            path: 'Generate QR Code',
            element : <QRG/>
          },
          {
            path: 'Meal Status',
            element : <Scanner2/>
          },
          {
            path: "History",
            element:  <QRHISTORY/>
          }
        ],
      }
])