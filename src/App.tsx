import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
