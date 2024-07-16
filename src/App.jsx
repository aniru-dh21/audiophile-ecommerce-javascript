import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:productId" element={<ProductDetail />} />
          <Route path=":checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
