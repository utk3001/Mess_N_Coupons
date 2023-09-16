import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from './components/homePage/home'
import Login from './components/login_register_Page/login'
import Register from './components/login_register_Page/register'
import Cart from './components/cart/cart'
import Mess from './components/outletPages/mess'
import MainCanteen from './components/outletPages/main_canteen'
import Hotspot from './components/outletPages/hotspot'
import Coffee from './components/outletPages/coffee_day'
import Kerala from './components/outletPages/kerala'
import Shake from './components/outletPages/shake'


function App() {
  return (
    <div className="contain">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mess' element={<Mess />} />
        <Route path='/maincanteen' element={<MainCanteen />} />
        <Route path='/kerala' element={<Kerala />} />
        <Route path='/coffee' element={<Coffee />} />
        <Route path='/shake' element={<Shake />} />
        <Route path='/hotspot' element={<Hotspot />} />
      </Routes>
    </div>
  );
}

export default App;
