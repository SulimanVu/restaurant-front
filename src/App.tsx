import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Profile from "./components/Profile/Profile";
import Favorites from "./components/Favorites/Favorites";
import BasketPage from "./pages/BasketPage/BasketPage";
import AdminProfilePage from "./pages/ProfilePage/AdminProfilePage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Slider from "./components/Slider/Slider";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
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
        {
          path: "basket",
          element: <BasketPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminProfilePage />,
      children: [
        {
          path: "personal_info",
          element: <Profile />,
        },
        {
          path: "favorites",
          element: <Favorites />,
        },
        {
          path: "basket",
          element: <BasketPage />,
        },
      ],
    },
    {
      path: "slider",
      element: <ProductDetail />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
