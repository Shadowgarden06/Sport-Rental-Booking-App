import React from 'react';
import '../HeaderAndFooter/css/Header.css';
import background from './img/background.png';
import HeaderBack from './HeaderBack';

function Header(props) {
    return (
        <header>
            <nav className='navbar navbar-expand-sm navbar-light footer'>
                <div className='container-fluid'>
                    <form className='d-flex'>
                        <div className='nav-item'>
                            <img className='background1' src={background} alt='' />
                            <h1 className='fw-bold'>Ryan sport club</h1>
                            <a className='nav-link active nav-header' href='/indoor'>
                                Indoor Sport
                            </a>
                            <a className='nav-link active nav-header' href='/outdoor'>
                                Outdoor Sport
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
