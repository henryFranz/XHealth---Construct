import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/todolist_principal",
        /* element: (OBS: Só deixei desse jeito mesmo porque é sua parte então não tem muito o que fazer
        o que posso fazer é simplismente deixar assim para depois você vir e importar os components já estilizados aqui.) */
      }
    ]
  },
  {
    path: "/modalidades",
    // element: <Modalidades />
  },
  {
    path: "/depoimentos",
    // element: <Modalidades />
  },
  {
    path: "/professores",
    // element: <Modalidades />
  },
  {
    path: "/duvidas",
    element: <Modalidades />,
    children: [
      {
        path: "/todolist_de_duvidas",
        // element: 
      }
    ]
  }
]);

export default router;