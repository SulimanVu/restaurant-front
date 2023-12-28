import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Menu from "./components/Menu/Menu";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    // {
    //   path: "/authorization",
    //   element: <Authorization />,
    //   children: [
    //     {
    //       path: "signIn",
    //       element: <SignIn />,
    //     },
    //     {
    //       path: "signUp",
    //       element: <SignUp />,
    //     },
    //   ],
    // },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
