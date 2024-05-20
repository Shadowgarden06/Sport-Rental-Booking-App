import React from 'react';
import home from './img/home.png';
import '../HeaderAndFooter/css/Header.css';
import { useNavigate } from 'react-router-dom';

function Footer(props) {
    const navigate = useNavigate();

    return (
        <div>
            <div className='footer'>
                <div className=' row-h d-flex justify-content-evenly flex-row pe-0 box-footer'>
                    <div className='pe-0'>
                        <h3 className='fw-bold'>Contact to Ryan</h3>
                        <p className='ps-3 text-start w-text-footer'>
                            Adirondack Sports Complex 326 Sherman AvenueQueensbury, New York
                            12804-9041
                        </p>
                        <p className='ps-3'>
                            Phone:{' '}
                            <a
                                href='tel:(518) 743-1086'
                                className='text-decoration-underline text-dark'
                            >
                                (518) 743-1086
                            </a>
                        </p>
                        <p className='ps-3'>
                            Fax:{' '}
                            <a
                                href='tel:(518) 743-1247'
                                className='text-decoration-underline text-dark'
                            >
                                (518) 743-1247
                            </a>
                        </p>
                    </div>
                    <div className='pe-0 box-footer'>
                        <h3 className='fw-bold'>Sport for everyone</h3>
                        <ul className=' list-unstyled ps-3'>
                            <li>
                                <a
                                    onClick={() => navigate('/basketball')}
                                    className='text-dark footer-text'
                                >
                                    Basketball
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => navigate('/football')}
                                    className='text-dark footer-text'
                                >
                                    Football
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => navigate('/baseball')}
                                    className='text-dark footer-text'
                                >
                                    Baseball
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => navigate('/tennis')}
                                    className='text-dark footer-text'
                                >
                                    Tennis
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='pe-0'>
                        <h3 className='fw-bold'>General Info</h3>
                        <ul className=' list-unstyled ps-3'>
                            <li>
                                <a
                                    onClick={() => navigate('/contact')}
                                    className='text-dark footer-text'
                                >
                                    About us
                                </a>
                            </li>

                            <li>
                                <a
                                    onClick={() => navigate('/event')}
                                    className='text-dark footer-text'
                                >
                                    Plan Your Event
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <img
                    className='background2 home-name'
                    src={home}
                    alt=''
                    onClick={() => {
                        navigate('/');
                    }}
                ></img>
                <p className='end mb-0'>@Copyright 2024 - Ryan sport club</p>
            </div>
        </div>
    );
}

export default Footer;
