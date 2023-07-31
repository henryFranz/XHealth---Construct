import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Modalidades from "./pages/Modalidades";
import Depoimentos from "./pages/Depoimentos";
import Professores from "./pages/Professores";
import Modalidade from "./pages/Modalidade";
import Galery from "./components/Galery";
import Duvidas from "./pages/Duvidas/DuvidasPage";
import TodoListDuvidas from './pages/Duvidas/Duvidas_Todolist'
import Planos from "./pages/Planos";

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
        path:"/planos",
        element:<Planos/>
      },
      {
      path:"/modalidades",
      element: <Modalidades/>,
      children:[
        {
          index:true,
          path:"/modalidades",
          element: <Galery/>},
        {
          path:"/modalidades/:id",
          element:<Modalidade/>
        }
      ]
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
        path :"/duvidas",
        element:<Duvidas/>,
        children:[
          {
            index:true,
            path:"/duvidas/Duvidas_Todolist",
            element: <TodoListDuvidas/>,
          }
        ]
      }
    ]
  }
]);

export default router;