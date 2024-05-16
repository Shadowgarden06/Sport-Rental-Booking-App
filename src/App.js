import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import BasketBall from './page/BasketBall';
import BaseBall from './page/BaseBall';
import Football from './page/Football';
import ContactUs from './page/ContactUs';
import Register from './page/register/Register';
import Historyyy from './page/history/Historyyy';
import Sports from './page/Sports'
import Tennis from './page/Tennis'
import BookStadium from './page/BookStadium'
import SignUp from './page/SignUp&&Login/SignUp';
import { useState } from 'react';
import Login from './page/SignUp&&Login/Login';
import { Any } from 'react-spring';
import { string } from 'yup';


function App() { 
    const [Infor,setInfor]= useState([])
    const [showAvatar, setShowAvatar] = useState("")
    const [open, setOpen] = useState(true);
    const [saveInfo,setSaveInfo] = useState({mail2: "", pass2: ""})
    console.log("APP",saveInfo);
    // const [count, setCount] = useState(2);
    return (
       
        <div className='App'>
       
            <Routes>
            
                <Route element={<HomePage saveInfo={saveInfo} open={open} setOpen={setOpen} showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>} path='/' />
                <Route element={<SignUp  saveInfo={saveInfo} setSaveInfo={setSaveInfo}/>} path='/signup' />
                <Route element={<Register Infor={Infor} setInfor={setInfor}/>} path='/register'/>
                <Route element={<Historyyy Infor={Infor} setInfor={setInfor}/>} path='/history'/>
                <Route element={<Sports showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>} path='/sports'>
                <Route element={<BookStadium />} path='bookstadium' />
                </Route>
                <Route element={<Register />} path='/register' />
                <Route element={<BasketBall />} path='/basketball' />
                <Route element={<BaseBall />} path='/baseball' />
                <Route element={<Tennis />} path='/tennis' />
                <Route element={<Football />} path='/football' />
                <Route element={<ContactUs />} path='/contact' />
                
            </Routes>
        </div>
    );
}

export default App;
