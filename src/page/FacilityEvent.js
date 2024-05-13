import React from 'react';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';
import EventPage from '../components/FacilityEvent/EventPage';
import { useNavigate } from 'react-router-dom';

function FacilityEvent(props) {
    const navigate = useNavigate();

    const handleNavigateToDailyEvent = () => {
        navigate('/child');
    };

    return (
        <div>
            <Header/>
            <header className="header_container">
                <div className="top_head">
                    <div className="web_name">
                        <h1>NEWS AND EVENT</h1>
                    </div>

                    <div className="nav_bar">
                        <nav>
                            <ul>
                                <li>News And Event</li>
                                <li onClick={handleNavigateToDailyEvent}>Daily Event</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <EventPage/>
            <Footer/>
        </div>
    );
}

export default FacilityEvent;
