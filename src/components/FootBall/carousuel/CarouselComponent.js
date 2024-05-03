import React from 'react';
import './CarouselComponent.scss';

function CarouselComponent(props) {
    return (
        <div>
            <div
                id='carouselExampleInterval'
                className='carousel slide position-relative'
                data-bs-ride='carousel'
            >
                <div className='carousel-inner'>
                    <div className='carousel-item active' data-bs-interval='3000'>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/11/hero_home_01.jpg'
                            className='d-block w-100'
                            alt='celebrity'
                        />

                        <div className='text-start text-light position-absolute top-20 start-20 w-700'>
                            <span className='fs-3 text-uppercase'>Soccer Club</span>
                            <h1 className='fs-78 lh-1 my-2'>
                                <span className='fw-bold text-black text-uppercase'>
                                    Ryan Sport Club
                                </span>{' '}
                                in love with soccer
                            </h1>
                            <span className='fs-3 d-block'>
                                Our team is under demand and our professional coaches are trained in
                                the latest soccer development techniques.
                            </span>
                            <div className='d-grid col-4 my-5'>
                                <button className='btn btn-primary text-uppercase fw-bold py-2 px-3'>
                                    Join the club
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='carousel-item' data-bs-interval='3000'>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/12/hero_home_02.jpg'
                            className='d-block w-100'
                            alt='goal'
                        />

                        <div className='text-start text-light position-absolute top-20 start-20 w-700'>
                            <span className='fs-3 text-uppercase'>Club News</span>
                            <h1 className='fs-78 lh-1 my-2'>
                                <span className='fw-bold text-black text-uppercase'>
                                    Ryan Sport Club
                                </span>{' '}
                                is opened in January
                            </h1>
                            <span className='fs-3 d-block'>
                                Bring to the table win-win survival strategies to ensure proactive
                                domination. At the end of the day, forward team.
                            </span>
                            <div className='d-grid col-4 my-5'>
                                <button className='btn btn-primary text-uppercase fw-bold py-2 px-3'>
                                    Join the club
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='carousel-item' data-bs-interval='3000'>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/12/hero_home_03.jpg'
                            className='d-block w-100'
                            alt='goalkeeper'
                        />

                        <div className='text-start text-light position-absolute top-20 start-20 w-700'>
                            <span className='fs-3 text-uppercase'>Soccer Club</span>
                            <h1 className='fs-78 lh-1 my-2'>
                                <span className='fw-bold text-black text-uppercase'>Join Now</span>{' '}
                                our youth squad
                            </h1>
                            <span className='fs-3 d-block'>
                                With a proud membership of out our 190+ young soccer players drawn,
                                we've a high level of the national competition.
                            </span>
                            <div className='d-grid col-4 my-5'>
                                <button className='btn btn-primary text-uppercase fw-bold py-2 px-3'>
                                    Join the club
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleInterval'
                    data-bs-slide='prev'
                >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>

                <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleInterval'
                    data-bs-slide='next'
                >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    );
}

export default CarouselComponent;
