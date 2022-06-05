import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Game from './pages/Game';
import Home from './pages/Home';
import Instructions from './pages/Instructions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <Router>
      <Navbar />
      <GameProvider>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Game />} path='/play' />
          <Route element={<Instructions />} path='/instructions' />
        </Routes>
      </GameProvider>
      <Footer />
    </Router>
  );
}

export default App;
