import React, { useEffect, useState } from 'react';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';
import EventPage from '../components/FacilityEvent/EventPage';
import { useNavigate } from 'react-router-dom';
import Login from './SignUp&&Login/Login';

function FacilityEvent(props) {
    const navigate = useNavigate();
    let { showAvatar, setShowAvatar, saveInfo } = props;
    const [open, setOpen] = useState(false);
    const handleNavigateToDailyEvent = () => {
        navigate('/child');
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Login
                saveInfo={saveInfo}
                setOpen={setOpen}
                open={open}
                showAvatar={showAvatar}
                setShowAvatar={setShowAvatar}
            />
            <Header
                open={open}
                setOpen={setOpen}
                showAvatar={showAvatar}
                setShowAvatar={setShowAvatar}
            />
            <header className='header_container'>
                <div className='top_head'>
                    <div className='web_name'>
                        <h1>NEWS AND EVENT</h1>
                    </div>

                    <div className='nav_bar'>
                        <nav>
                            <ul>
                                <li>News And Event</li>
                                <li onClick={handleNavigateToDailyEvent}>Daily Event</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <EventPage />
            <Footer />
        </div>
    );
}

export default FacilityEvent;
