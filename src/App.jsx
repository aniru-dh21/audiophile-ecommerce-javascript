import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
