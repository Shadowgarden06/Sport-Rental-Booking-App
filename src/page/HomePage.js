import React, { useState } from 'react';
import Header from '../components/HeaderAndFooter/Header';
import Bar from '../components/HomePageComponent/Bar';
import Item from '../components/HomePageComponent/Item';
import Image from '../components/HomePageComponent/Image';
import ChangeImg from '../components/HomePageComponent/ChangeImg';
import Describe from '../components/HomePageComponent/Describe';
import Footer from '../components/HeaderAndFooter/Footer';
import HeaderBack from '../components/HeaderAndFooter/HeaderBack';
import Login from './SignUp&&Login/Login';

function HomePage(props) {
    
    const [count, setCount] = useState(0);
    const {showAvatar,setShowAvatar,setOpen,open,saveInfo} =props
    console.log(saveInfo);

    return (
        <div>
            <Login saveInfo={saveInfo} setOpen = {setOpen} open = {open} showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>
            <Header setOpen = {setOpen} showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>
            <HeaderBack />
            <Bar/>
            <Item/>
            <h1 className='text-center p-3'>GET MOTIVATED. JOIN A CLUB.</h1>
            <Image count={count}></Image>
            <ChangeImg count={count} setCount={setCount}></ChangeImg>
            <Describe></Describe>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;
