import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Product from "./pages/Product";
import Notfound from "./pages/404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyContext from './MyContext';

const App = () => {
  return (
    <MyContext.Provider value={{ basename: 'my-basename' }}>
      <section className="">
        <Navbar />

        <main> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="/:id" element={<ProductDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>

        <Footer />
      </section>
    </MyContext.Provider>
  );
};

export default App;
