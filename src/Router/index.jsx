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
import EachQRHistory from "@/MainPage/History/Component/EachQRHistory";
import CodeSettingsPage from "@/MainPage/Qr Code Settings/Component/CodeSettingsPage";
import Template from "@/MainPage/History/Component/Template";
import Addlive from "@/MainPage/add-link/Component/Addlive";


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
            element: <Scanner/>
          },
          // {
          //   path: 'Scan Code',
          //   element : <Scanner/>
          // },
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
          },
          {
            path: 'Each QR Code History',
            element: <EachQRHistory/>
          },
          {
            path : "Settings",
            element : <CodeSettingsPage/>
          },
          {
            path : "Template",
            element : <Template/>
          },
          {
            path: 'add-link',
            element : <Addlive/>
          }
        ],
      }
])