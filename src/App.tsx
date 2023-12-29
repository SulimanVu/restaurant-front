import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
 import ProductDetail from "./components/ProductDetail/ProductDetail";
// import ProductDetail from "./components/ProductDetail/ProductDetail";
import AdminProfilePage from "./pages/ProfilePage/AdminProfilePage";
import Analytics from "./helpers/Analytics/Analytics";
import TestAn from "./helpers/Analytics/Analytics";
import { AdminMenu } from "./pages/AdminMenu/AdminMenu";
import { AddPlate } from "./pages/AdminMenu/ui/AddPlate/AddPlate";
import { AdminOrders } from "./pages/AdminOrders/AdminOrders";
import Test from "./pages/test/Test";
import Basket from "@/pages/Basket/Basket";

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
    {
      path: "/my_accaunt",
      element: <ProfilePage />,
      children: [
        {
          path: "personal_info",
          element: <Profile />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminProfilePage />,
      children: [
        {
          path: "statistics",
          element: <TestAn />,
        },
        {
          path: "menu",
          element: <AdminMenu />,
        },
        {
          path: "orders",
          element: <AdminOrders />,
        },

        {
          path: "addPlate",
          element: <AddPlate />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
      ],
    },
    {
      path: '/productDetail/:id',
      element: <ProductDetail />
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;