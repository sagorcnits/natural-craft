import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Root from "../layout/Root";
import AddCraft from "../pages/addCraft/AddCraft";
import AllArtCraftItems from "../pages/allArtCraftItems/AllArtCraftItems";
import CategoryCard from "../pages/categoryCard/CategoryCard";
import CraftList from "../pages/craftList/CraftList";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Register from "../pages/register/Register";
import UpdatePage from "../pages/updatePage/UpdatePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://natural-craft-server.vercel.app/items"),
      },

      {
        path: "/addcraft",
        element: (
          <PrivateRoute>
            <AddCraft></AddCraft>
          </PrivateRoute>
        ),
      },

      {
        path: "/allcraft",
        element: <AllArtCraftItems></AllArtCraftItems>,
        loader: () => fetch("https://natural-craft-server.vercel.app/items"),
      },

      {
        path: "/craftlist",
        element: (
          <PrivateRoute>
            <CraftList></CraftList>
          </PrivateRoute>
        ),
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader:()=> fetch(`https://natural-craft-server.vercel.app/items`)
      },

      {
        path: "/category/:id",
        element: <CategoryCard></CategoryCard>,
        loader: ({ params }) =>
          fetch(`https://natural-craft-server.vercel.app/categories/${params.id}`),
      },

      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`https://natural-craft-server.vercel.app/items/${params.id}`),
      },
    ],
  },
]);

export default router;
