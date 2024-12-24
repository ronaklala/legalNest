import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div id="page" className="hfeed site">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <Header />
      {/* #masthead */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      {/* #content */}
      <Footer />
      {/* #colophon */}
    </div>
  );
}

export default App;
