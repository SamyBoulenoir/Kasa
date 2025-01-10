import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import NotFound from './component/pages/redirection/notFound/NotFound';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} /> {/* Route 404 */}
          </Routes>
          <Footer />
        </main>
      </Router>
    </div>
  );
};

export default App;
