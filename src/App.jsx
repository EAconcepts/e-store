import { Route, Routes, BrowserRouter } from "react-router-dom";
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
import Contact from "./components/Contact";
import NoMatch404 from "./components/NoMatch404";
import Cart from "./components/Cart";
import Category from "./components/Category";


function App() {
  return (
    <div className="text-primary-black flex flex-col ">
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
          <Route path="/blog/:postId" element={<BlogPost/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category/:name" element={<Category/>}/>

          <Route path="*" element={<NoMatch404/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
