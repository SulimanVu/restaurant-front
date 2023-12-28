import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Test from "./pages/test/Test";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/test",
      element: <Test />,
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

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
