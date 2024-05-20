import React, { useState } from 'react';
import '../HeaderAndFooter/css/Header.css';
import home from './img/home.png';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    let { setOpen, showAvatar, setShowAvatar } = props;
    const [menuOpen, setMenuOpen] = useState(false);
    const handleViewHistory = () => {
        const bookingInfo = JSON.parse(localStorage.getItem('bookingInfo'));
        navigate('/history', { state: { bookingInfo } });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className='navbar navbar-expand-sm navbar-light footer'>
                <div className='container-fluid'>
                    <form className='d-flex justify-content-evenly w-100'>
                        <div className='nav-item'>
                            <div
                                class='bg-image hover-overlay shadow-1-strong rounded'
                                data-mdb-ripple-init
                                data-mdb-ripple-color='light'
                            >
                                <img
                                    className='background1 w-100'
                                    src={home}
                                    alt=''
                                    onClick={() => {
                                        navigate('/');
                                    }}
                                />
                            </div>
                            <a
                                onClick={() => {
                                    navigate('/');
                                }}
                                className='home-name fw-bold text-black fs-1 text-uppercase text-decoration-none'
                            >
                                Ryan Sport Club
                            </a>
                            <a
                                className='nav-link active nav-header1'
                                onClick={() => {
                                    navigate('/sports');
                                }}
                            >
                                Sports
                            </a>
                            <a
                                className='nav-link active nav-header1'
                                onClick={() => {
                                    navigate('/gallery');
                                }}
                            >
                                Gallery
                            </a>
                            <a
                                className='nav-link active nav-header1'
                                onClick={() => {
                                    navigate('/event');
                                }}
                            >
                                Facility your event
                            </a>
                            <a
                                className='nav-link active nav-header1'
                                onClick={() => {
                                    navigate('/contact');
                                }}
                            >
                                About us
                            </a>
                            <div className='nav-login'>
                                {showAvatar == 1 ? (
                                    <div className='d-flex'>
                                        <span className='me-5' onClick={handleViewHistory}>
                                            <i class='fa-solid fa-user-tie'></i>
                                        </span>
                                        <span
                                            onClick={() => {
                                                setShowAvatar(2);
                                                navigate('/');
                                            }}
                                        >
                                            <i class='fa-solid fa-arrow-right-from-bracket'></i>
                                        </span>
                                    </div>
                                ) : (
                                    <a
                                        className='nav-link active text-decoration-none'
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                    >
                                        Login
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className='thuanheader'>
                            <img
                                className='background1'
                                src={home}
                                alt=''
                                onClick={() => {
                                    navigate('/');
                                }}
                            />
                            <div className='menu-icon' onClick={toggleMenu}>
                                &#9776;
                            </div>

                            <div className={`menu-popup ${menuOpen ? 'active' : ''}`}>
                                <a href='/sports'>Sports</a>

                                <a href='/gallery'>Gallery</a>
                                <a href='/event'>Facility your event</a>

                                <a href='/login'>Login</a>
                                <a href='/contact'>About us</a>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
