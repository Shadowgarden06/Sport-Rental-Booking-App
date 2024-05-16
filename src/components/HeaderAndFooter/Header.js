import React, { useState } from 'react';
import '../HeaderAndFooter/css/Header.css';
import home from './img/home.png';
import { useNavigate } from 'react-router-dom';
import Login from '../../page/SignUp&&Login/Login';
import { useLocation } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    let { setOpen, showAvatar, setShowAvatar } = props;

    // const location = useLocation();
    // const avatar = location.state?.avatar

    // console.log('avatar.showAvatar', avatar);
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
                                className='home-name fw-bold text-black fs-1 text-uppercase'
                            >
                                Ryan Sport Club
                            </a>
                            <a
                                className='nav-link active nav-header'
                                onClick={() => {
                                    navigate('/sports');
                                }}
                            >
                                Sports
                            </a>
                            <a
                                className='nav-link active nav-header'
                                onClick={() => {
                                    navigate('/gallery');
                                }}
                            >
                                Gallery
                            </a>
                            <a
                                className='nav-link active nav-header'
                                onClick={() => {
                                    navigate('/event');
                                }}
                            >
                                Facility your event
                            </a>
                            <a
                                className='nav-link active nav-header'
                                onClick={() => {
                                    navigate('/contact');
                                }}
                            >
                                About us
                            </a>
                            <div className='nav-login'>
                                {showAvatar == 1 ? (
                                    <div className='d-flex'>
                                        <span className='me-5' onClick={() => navigate('/history')}>
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
                                        className='nav-link active'
                                        onClick={() => {
                                            setOpen(true);
                                        }}
                                    >
                                        Login
                                    </a>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
