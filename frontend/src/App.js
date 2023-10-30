import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import Anime from './pages/Anime/anime';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="Anime" element={<Anime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
