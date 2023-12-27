import { Route, Routes, BrowserRouter } from "react-router-dom";
import All from "./components/New Arrival/All";
import Dress from "./components/New Arrival/Dress";
import Bag from "./components/New Arrival/Bag";
import Tshirt from "./components/New Arrival/Tshirt";
import Apparel from "./components/New Arrival/Apparel";
import Blog from "./pages/Blog/Blog";
import BlogPost from "./pages/Blog/components/BlogPost";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact/Contact";
import NoMatch404 from "./components/NoMatch404";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Navbar from "./layout/Navbar";
import ProductDetail from "./pages/Product-details/ProductDetail";

function App() {
  return (
    <div className=" font-tenor-sans text-primary-black flex flex-col ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route path="" element={<All />} />
            <Route path="apparel" element={<Apparel />} />
            <Route path="Dress" element={<Dress />} />
            <Route path="tshirt" element={<Tshirt />} />
            <Route path="bag" element={<Bag />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:categories/:names" element={<Category />} />
          <Route
            path="/:categories/:names/:productId"
            element={<ProductDetail />}
          />
          <Route path="*" element={<NoMatch404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
