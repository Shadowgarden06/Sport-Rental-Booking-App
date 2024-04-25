import React, { useState } from 'react';
import Header from '../component/HeaderAndFooter/Header';
import Bar from '../component/HomePageComponent/Bar';
import Item from '../component/HomePageComponent/Item';
import Image from '../component/HomePageComponent/Image';
import ChangeImg from '../component/HomePageComponent/ChangeImg';
import Describe from '../component/HomePageComponent/Describe';
import Footer from '../component/HeaderAndFooter/Footer';

function HomePage(props) {
  const [count,setCount]=useState(0)
    return (
        <div>
        <Header></Header>
      <Bar></Bar>
      <Item></Item>
      <h1 className="text-center p-3">GET MOTIVATED. JOIN A CLUB.</h1>
      <Image count={count}></Image>
      <ChangeImg count={count} setCount={setCount}></ChangeImg>
      <Describe></Describe>
      <Footer></Footer>
        </div>
    );
}

export default HomePage;