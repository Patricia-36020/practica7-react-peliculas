import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="link-no-underline">
          <h1 className="title">🎬 Películas</h1>
        </Link>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<p className="mensaje">Página no encontrada</p>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
