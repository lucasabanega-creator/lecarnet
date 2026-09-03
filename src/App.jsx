import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gateway from "./pages/Gateway";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import Sobre from "./pages/Sobre";
import Filosofia from "./pages/Filosofia";
import Notas from "./pages/Notas";
import Nota from "./pages/Nota";
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
      <main id="contenido" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Gateway />} />
        <Route path="/experiencias" element={<CategoryPage key="experiencias" catSlug="experiencias" />} />
        <Route path="/gastronomia" element={<CategoryPage key="gastronomia" catSlug="gastronomia" />} />
        <Route path="/perfumes" element={<CategoryPage key="perfumes" catSlug="perfumes" />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/notas/:slug" element={<Nota />} />
        <Route path="/:cat/:slug" element={<ItemPage />} />
      <Route path="*" element={<ItemPage />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}
