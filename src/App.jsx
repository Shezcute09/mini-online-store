import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryView from "./pages/CategoryView";
import Cart from "./pages/Cart";
import CheckOut_one from "./pages/CheckOut_one";
import CheckOut_two from "./pages/CheckOut_two";
import Confirmpayment_one from "./pages/Confirmpayment_one";
import Error from "./pages/Error";
import Confirmpayment_two from "./pages/Confirmpayment_two";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CategoryView />,
      errorElement: <Error />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout_one",
      element: <CheckOut_one />,
    },
    {
      path: "/checkout_two",
      element: <CheckOut_two />,
    },

    {
      path: "/checkout_one",
      element: <CheckOut_one />,
    },

    {
      path: "/confirmpayment_one",
      element: <Confirmpayment_one />,
    },
    {
      path: "/confirmpayment_two",
      element: <Confirmpayment_two />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
