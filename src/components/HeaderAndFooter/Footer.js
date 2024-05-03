import React from 'react';
import background from './img/background.png';
import './css/Header.css';

function Footer(props) {
    return (
        <div>
            <div className='footer'>
                <div className='row row-h'>
                    <div className='col-sm-4'>
                        <h3 className='fw-bold'>Contact to Ryan</h3>
                        <p>
                            Adirondack Sports Complex 326 Sherman AvenueQueensbury, New York
                            12804-9041
                        </p>
                        <p>
                            Phone:{' '}
                            <a
                                href='tel:(518) 743-1086'
                                className='text-decoration-underline text-dark'
                            >
                                (518) 743-1086
                            </a>
                        </p>
                        <p>
                            Fax:{' '}
                            <a
                                href='tel:(518) 743-1247'
                                className='text-decoration-underline text-dark'
                            >
                                (518) 743-1247
                            </a>
                        </p>
                    </div>
                    <div className='col-sm-4'>
                        <h3 className='fw-bold'>Sport for everyone</h3>
                        <ul>
                            <li>
                                <a href='/basketball' className='text-dark'>
                                    Basketball
                                </a>
                            </li>
                            <li>
                                <a href='/football' className='text-dark'>
                                    Football
                                </a>
                            </li>
                            <li>
                                <a href='/baseball' className='text-dark'>
                                    Baseball
                                </a>
                            </li>
                            <li>
                                <a href='/badminton' className='text-dark'>
                                    Badminton
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-4'>
                        <h3 className='fw-bold'>General Info</h3>
                        <ul>
                            <li>
                                <a href='/about' className='text-dark'>
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href='/feedback' className='text-dark'>
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href='/event' className='text-dark'>
                                    Plan Your Event
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className='background2' src={background} alt=''></img>
                <p className='end'>@Copyright 2024 - Ryan sport club</p>
            </div>
        </div>
    );
}

export default Footer;
