import React from 'react';
import home from '../../../assets/img/home.png';
import './GameReport.scss';

function GameReport(props) {
    return (
        <div className='container z-1 d-grid bg-light position-absolute top-14 rp-shadow rounded-end-4'>
            <div className='row'>
                <div className='col p-50'>
                    <span className='d-block text-uppercase text-center'>Game Report</span>
                    <span className='d-block text-uppercase fs-1 my-2 text-center'>
                        <span className='fw-bold text-info'>Great Win</span> in finals
                    </span>
                    <div className='mb-5'>
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
                                        3
                                    </span>
                                    <span className='text-secondary ms-3'>Ryan Sport Club</span>
                                </div>
                                <div className='col p-0 mt-3'>
                                    <span className='d-block fw-bold fs-1 text-center'>2</span>
                                    <span className='text-secondary ms-35'>FC Florida </span>
                                </div>
                                <div className='col'>
                                    <img
                                        src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/races_logo_01.png'
                                        alt='way'
                                        className='logo-way'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button className='text-uppercase fw-semibold btn btn-primary py-2 px-3'>
                            More Detail
                        </button>
                    </div>
                </div>

                <div className='col p-0'>
                    <img
                        src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2018/02/home_game.jpg'
                        alt='final'
                        className='final-report rounded-end-4'
                    />
                </div>
            </div>
        </div>
    );
}

export default GameReport;
