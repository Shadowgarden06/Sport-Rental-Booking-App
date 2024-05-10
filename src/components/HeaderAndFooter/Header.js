import React from 'react';
import '../HeaderAndFooter/css/Header.css';
import home from './img/home.png';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();

    return (
        <header>
            <nav className='navbar navbar-expand-sm navbar-light footer'>
                <div className='container-fluid'>
                    <form className='d-flex'>
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
                                href='/'
                                className='home-name fw-bold text-black fs-1 text-uppercase'
                            >
                                Ryan Sport Club
                            </a>
                            <a className='nav-link active nav-header' href='/sports'>
                                Sports
                            </a>
                            <a className='nav-link active nav-header' href='/gallery'>
                                Gallery
                            </a>
                            <a className='nav-link active nav-header' href='/event'>
                                Facility your event
                            </a>
                            <a className='nav-link active nav-header' href='/contact'>
                                About us
                            </a>
                            <div className='nav-login'>
                                <a className='nav-link active' href='/login'>
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;
