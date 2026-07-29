import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import Sobre from "./pages/Sobre";
import "./casa-banega.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="cb-root">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencias" element={<CategoryPage catSlug="experiencias" />} />
        <Route path="/gastronomia" element={<CategoryPage catSlug="gastronomia" />} />
        <Route path="/perfumes" element={<CategoryPage catSlug="perfumes" />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/:cat/:slug" element={<ItemPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
