import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Modalidades from "./pages/Modalidades";
import Depoimentos from "./pages/Depoimentos";
import Professores from "./pages/Professores";
import Duvidas from "./pages/Duvidas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true ,
        path: "/",
        element: <Home/>
      },
      {
      path:"/modalidades",
      element: <Modalidades/>
      },
      {
        path:"/depoimentos",
        element: <Depoimentos/>,
      },
      {
        path:"/professores",
        element:<Professores/>
      },
      {
        path :"Duvidas",
        element:<Duvidas/>
      }
    ]
  }
]);

export default router;