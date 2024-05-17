import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import BasketBall from './page/BasketBall';
import BaseBall from './page/BaseBall';
import Football from './page/Football';
import ContactUs from './page/ContactUs';
import Historyyy from './page/history/Historyyy';
import BookStadium from './page/BookStadium';
import Sports from './page/Sports';
import Tennis from './page/Tennis';
import FacilityChild from './page/FacilityChild';
import FacilityEvent from './page/FacilityEvent';
import Gallary from './page/Gallary';
import SignUp from './page/SignUp&&Login/SignUp';
import { useState } from 'react';
import Register from './page/register/Register';

function App() {
    const [Infor, setInfor] = useState(['']);
    const [showAvatar, setShowAvatar] = useState('');
    const [open, setOpen] = useState(true);
    const [saveInfo, setSaveInfo] = useState({ mail2: '', pass2: '' });
    return (
        <div className='App'>
            <Routes>
                <Route
                    element={
                        <HomePage
                            saveInfo={saveInfo}
                            open={open}
                            setOpen={setOpen}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/'
                />
                <Route
                    element={<SignUp saveInfo={saveInfo} setSaveInfo={setSaveInfo} />}
                    path='/signup'
                />
                <Route
                    element={
                        <Register
                            saveInfo={saveInfo}
                            Infor={Infor}
                            setInfor={setInfor}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/registerMemberShip'
                />
                <Route
                    element={
                        <Historyyy
                            saveInfo={saveInfo}
                            Infor={Infor}
                            setInfor={setInfor}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/history'
                />
                <Route
                    element={
                        <Sports
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/sports'
                />
                <Route
                    element={
                        <BookStadium
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='bookstadium'
                />
                <Route
                    element={
                        <BasketBall
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/basketball'
                />
                <Route
                    element={
                        <BaseBall
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/baseball'
                />
                <Route
                    element={
                        <Tennis
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/tennis'
                />
                <Route
                    element={
                        <Football
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/football'
                />
                <Route
                    element={
                        <ContactUs
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/contact'
                />
                <Route
                    element={
                        <FacilityChild
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/child'
                />
                <Route
                    element={
                        <FacilityEvent
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/event'
                />
                <Route
                    element={
                        <Gallary
                            saveInfo={saveInfo}
                            showAvatar={showAvatar}
                            setShowAvatar={setShowAvatar}
                        />
                    }
                    path='/gallery'
                />
            </Routes>
        </div>
    );
}

export default App;
