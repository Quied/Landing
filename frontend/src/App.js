import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import Anime from './pages/Anime/anime';
import SignUp from './pages/Register/SignUp/up';
import SignIn from './pages/Register/SignIn/in';
import Player from './pages/Player/player';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="Anime" element={<Anime />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="Video" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
