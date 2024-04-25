import logo from './logo.svg';
import './App.css';
import Header from './component/HeaderAndFooter/Header';
import Bar from './component/HomePageComponent/Bar';
import Item from './component/HomePageComponent/Item';
import Image from './component/HomePageComponent/Image';
import ChangeImg from './component/HomePageComponent/ChangeImg'
import Describe from './component/HomePageComponent/Describe';
import Footer from './component/HeaderAndFooter/Footer';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import HomePage from './page/HomePage';

function App() {
  const [count,setCount]=useState(2);
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
