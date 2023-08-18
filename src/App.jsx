import { createBrowserRouter, RouterProvider } from "react-router-dom";
import All from "./components/New Arrival/All";
import Dress from "./components/New Arrival/Dress";
import Bag from "./components/New Arrival/Bag";
import Tshirt from "./components/New Arrival/Tshirt";
import Apparel from "./components/New Arrival/Apparel";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/all",
        element: <All />,
      },
      {
        path: "/dress",
        element: <Dress />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/tshirt",
        element: <Tshirt />,
      },
      {
        path: "/apparel",
        element: <Apparel />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="text-primary-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
