import React from 'react';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';
import ChildEvent from "../components/FacilityEvent/ChildEvent";
import { useNavigate } from 'react-router-dom';

function FacilityChild(props) {
    const navigate = useNavigate();

    const handleNavigateToEvent = () => {
        navigate('/event'); // Chuyển hướng đến đường dẫn '/DailyEvent' khi nhấn vào mục "Daily Event"
    };
    return (
        <div >
            <Header/>
            <header className="header_container">
                <div className="top_head">
                    <div className="web_name">
                        <h1>NEWS AND EVENT</h1>
                    </div>

                    <div className="nav_bar">
                        <nav>
                            <ul>
                                <li onClick={handleNavigateToEvent}>News And Event</li>
                                <li >Daily Event</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <div style={{height: "100vh"}}> 
                <ChildEvent/>
            </div>
            <Footer/>
        </div>
    );
}

export default FacilityChild;
