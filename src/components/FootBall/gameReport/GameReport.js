import React from 'react';
import home from '../../../assets/img/home.png';
import './GameReport.scss';

function GameReport(props) {
    return (
        <div className='container z-1 d-grid bg-light position-absolute top-35 rp-shadow rounded-end-4'>
            <div className='row'>
                <div className='col p-50'>
                    <span className='d-block text-uppercase'>Game Report</span>
                    <span className='d-block text-uppercase fs-1 my-2'>
                        <span className='fw-bold text-info'>Great Win</span> in finals
                    </span>
                    <div className='mb-5'>
                        <div className='row'>
                            <span className='d-block mb-3'>Mon, OCT 21,Youth League</span>
                        </div>

                        <div className='row '>
                            <div className='row'>
                                <div className='col'>
                                    <img src={home} alt='home' className='logo-home' />
                                </div>

                                <div className='col p-0 mt-3 '>
                                    <span className='d-block fw-bold fs-1 border-end border-secondary-subtle mr-n10'>
                                        3
                                    </span>
                                    <span className='text-secondary'>Ryan Sport Club</span>
                                </div>
                                <div className='col p-0 mt-3'>
                                    <span className='d-block fw-bold fs-1 '>2</span>
                                    <span className='text-secondary'>FC Florida </span>
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

                    <button className='text-uppercase fw-semibold btn btn-primary py-2 px-3'>
                        More Detail
                    </button>
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
