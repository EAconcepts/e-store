import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom";
import All from "./components/New Arrival/All";
import Dress from "./components/New Arrival/Dress";
import Bag from "./components/New Arrival/Bag";
import Tshirt from "./components/New Arrival/Tshirt";
import Apparel from "./components/New Arrival/Apparel";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

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
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:postId",
    element: <BlogPost />,
  },
]);

function App() {
  return (
    <div className="text-primary-black flex flex-col ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="all" element={<All />} />
            <Route path="apparel" element={<Apparel />} />
            <Route path="Dress" element={<Dress />} />
            <Route path="tshirt" element={<Tshirt />} />
            <Route path="bag" element={<Bag />} />
          </Route>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
