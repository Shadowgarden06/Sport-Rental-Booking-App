import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import BasketBall from './page/BasketBall';
import BaseBall from './page/BaseBall';
import Badminton from './page/Badminton';
import Football from './page/Football';
import ContactUs from './page/ContactUs';
import Register from './page/register/Register';
import Historyyy from './page/history/Historyyy';
import { useState } from 'react';

function App() { 
    const [Infor,setInfor]= useState([])
    // const [count, setCount] = useState(2);
    return (
       
        <div className='App'>
            <Routes>
                <Route element={<HomePage />} path='/' />
                <Route element={<Register Infor={Infor} setInfor={setInfor}/>} path='/register'/>
                <Route element={<Historyyy Infor={Infor} setInfor={setInfor}/>} path='/history'/>
                <Route element={<BasketBall />} path='/basketball' />
                <Route element={<BaseBall />} path='/baseball' />
                <Route element={<Badminton />} path='/badminton' />
                <Route element={<Football />} path='/football' />
                <Route element={<ContactUs />} path='/contact' />
                
            </Routes>
        </div>
    );
}

export default App;
