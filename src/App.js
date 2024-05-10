import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import BasketBall from './page/BasketBall';
import BaseBall from './page/BaseBall';
import Football from './page/Football';
import ContactUs from './page/ContactUs';
import Register from './page/register/Register';
import Tennis from './page/Tennis';
import BookStadium from './page/BookStadium';
import Sports from './page/Sports';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route element={<HomePage />} path='/' />
                <Route element={<Sports />} path='/sports'>
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
