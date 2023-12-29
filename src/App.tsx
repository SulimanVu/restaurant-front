import './App.css'
import Footer from './components/Footer/Footer'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
// import ProductDetail from "./components/ProductDetail/ProductDetail";
import AdminProfilePage from "./pages/ProfilePage/AdminProfilePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Analytics from "./helpers/Analytics/Analytics";
import TestAn from "./helpers/Analytics/Analytics";
import { AdminMenu } from "./components/AdminMenu/AdminMenu";
import { AddPlate } from "./components/AdminMenu/ui/AddPlate/AddPlate";
import { AdminOrders } from "./components/AdminOrders/AdminOrders";
import Test from "./pages/test/Test";
import Layout from "./components/Layout/Layout";
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
      path:'/basket',
      element: <Basket />
    }
    // {
    //   path: '/productDetail/:id',
    //   element: <ProductDetail />
    // }
  ]);

  return (
    <Provider store={store}>
      <Layout>
        <RouterProvider router={routes} />
      </Layout>
    </Provider>
  );
}

export default App;
