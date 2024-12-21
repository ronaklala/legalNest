import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './shared/Footer';
import Header from './shared/Header';
import Home from './components/Home';
import About from './components/About';

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
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    {/* #content */}
    <Footer />
    {/* #colophon */}
  </div>
  
  );
}

export default App;
