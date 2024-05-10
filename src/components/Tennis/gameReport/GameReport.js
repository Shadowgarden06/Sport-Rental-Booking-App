import React from 'react';
import home from '../../../assets/img/home.png';
import './GameReport.scss';

function GameReport(props) {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='container z-1 basketball-rp bg-light position-absolute top-13 left-10 rp-shadow rounded-4'>
                <div className='row'>
                    <div className='col p-4'>
                        <div className=''>
                            <div className='row'>
                                <span className='d-block mb-3 text-center'>
                                    Mon, OCT 21,Youth League
                                </span>
                            </div>

                            <div className='row '>
                                <div className='row'>
                                    <div className='col'>
                                        <img src={home} alt='home' className='logo-home' />
                                    </div>

                                    <div className='col p-0 mt-3 '>
                                        <span className='d-block fw-bold fs-1 text-center border-end border-secondary-subtle mr-n10'>
                                            99
                                        </span>
                                        <span className='text-secondary'>Ryan Sport Club</span>
                                    </div>
                                    <div className='col p-0 mt-3'>
                                        <span className='d-block fw-bold fs-1 text-center'>83</span>
                                        <span className='text-secondary ms-35'>Lakers</span>
                                    </div>
                                    <div className='col'>
                                        <img
                                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/races_logo_01.png'
                                            alt='way'
                                            className='logo-way'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center p-3'>
                            <button className='text-uppercase text-white fw-semibold btn btn-redbasket py-2 px-3'>
                                Game Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container z-1 basketball-rp bg-light position-absolute top-13 right-10 rp-shadow rounded-4'>
                <div className='row'>
                    <div className='col p-4'>
                        <div className=''>
                            <div className='row'>
                                <span className='d-block mb-3 text-center'>
                                    SAT, OCT 24, SENIOR LEAGUE
                                </span>
                            </div>

                            <div className='row '>
                                <div className='row'>
                                    <div className='col'>
                                        <img src={home} alt='home' className='logo-home' />
                                    </div>

                                    <div className='col p-0 mt-3 '>
                                        <span className='d-block fw-bold fs-1 text-center border-end border-secondary-subtle mr-n10'>
                                            78
                                        </span>
                                        <span className='text-secondary'>Ryan Sport Club</span>
                                    </div>
                                    <div className='col p-0 mt-3'>
                                        <span className='d-block fw-bold fs-1 text-center'>65</span>
                                        <span className='text-secondary ms-35'>Boston </span>
                                    </div>
                                    <div className='col'>
                                        <img
                                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/races_logo_02.png'
                                            alt='way'
                                            className='logo-way'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center p-3'>
                            <button className='text-uppercase text-white fw-semibold btn btn-redbasket py-2 px-3'>
                                Game Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameReport;
