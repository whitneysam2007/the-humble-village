import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import OurCause from "./pages/OurCause";
import OurTeam from "./pages/OurTeam";
import Give from "./pages/Give";

function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '20px',
      fontFamily: 'Figtree, sans-serif',
      color: '#36302A',
    }}>
      <h1 style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '48px', fontWeight: 400 }}>404</h1>
      <p style={{ fontSize: '18px', opacity: 0.7 }}>Page not found</p>
      <a href="/" style={{ fontSize: '14px', textDecoration: 'underline', opacity: 0.6 }}>Go home</a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourcause" element={<OurCause />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/give-1" element={<Give />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
