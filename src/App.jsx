import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DateTime from "./components/DateTime";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <DateTime />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptops/:id" element={<ProductDetails />} />
        <Route path="/laptops" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;