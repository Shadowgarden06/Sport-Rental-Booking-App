import React from 'react';
import './PlayersBasketball.scss';

function PlayersBasketball(props) {
    return (
        <div>
            <div className='bg-light-subtle'></div>
            <div className='d-flex flex-column  bg-primary bg-player1'>
                <div className='d-flex flex-column justify-content-center align-items-center text-white box-player ms-21 p-5'>
                    <span className=' d-block fs-48 text-uppercase text-center'>
                        Player <span className='fw-bold text-orange'>Testimonials</span>
                    </span>
                    <div>All awards recognize the players</div>
                </div>

                <div>
                    <div
                        id='carouselExampleInterval'
                        class='carousel slide'
                        data-bs-ride='carousel'
                    >
                        <div class='carousel-inner'>
                            <div
                                class='carousel-item active'
                                id='carousel-ms'
                                data-bs-interval='3000'
                            >
                                <div className='d-flex ms-8basket flex-column player-box-des'>
                                    <div className='player-box-img my-3'>
                                        <img
                                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/team_member_03.jpg'
                                            alt=''
                                            className='player-img1 text-content_form'
                                        />
                                    </div>

                                    <div className='text-white text-center box-player-des'>
                                        <h2 className='player-box-des my-3'>
                                            <span className='fs-13 d-block text-uppercase'>
                                                CENTER
                                            </span>
                                            <span className='fs-5 fw-bold text-uppercase'>
                                                THOMAS LEE
                                            </span>
                                        </h2>

                                        <p className='fs-15 player-box-des'>
                                            Podcasting operational change management inside of
                                            workflows to establish a framework. Taking seamless key
                                            performance indicators offline to maximise the long
                                            tail. Keeping your eye on the ball while performing a
                                            deep dive.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class='carousel-item' id='carousel-ms' data-bs-interval='3000'>
                                <div className='d-flex ms-8basket flex-column player-box-des'>
                                    <div className='player-box-img my-3'>
                                        <img
                                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/team_member_09.jpg'
                                            alt=''
                                            className='player-img1 text-content_form'
                                        />
                                    </div>

                                    <div className='text-white text-center box-player-des'>
                                        <h2 className='player-box-des my-3'>
                                            <span className='fs-13 d-block text-uppercase'>
                                                Point Guard
                                            </span>
                                            <span className='fs-5 fw-bold text-uppercase'>
                                                Greg Olson
                                            </span>
                                        </h2>

                                        <p className='fs-15 player-box-des'>
                                            Capitalize on low hanging fruit to identify a ballpark
                                            value added activity to beta test. Override the digital
                                            divide with additional clickthroughs from DevOps.
                                            Nanotechnology immersion along the information highway.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class='carousel-item' id='carousel-ms' data-bs-interval='3000'>
                                <div className='d-flex ms-8basket flex-column player-box-des'>
                                    <div className='player-box-img my-3'>
                                        <img
                                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/team_member_12.jpg'
                                            alt=''
                                            className='player-img1 text-content_form'
                                        />
                                    </div>

                                    <div className='text-white text-center box-player-des'>
                                        <h2 className='player-box-des my-3'>
                                            <span className='fs-13 d-block text-uppercase'>
                                                MVP
                                            </span>
                                            <span className='fs-5 fw-bold text-uppercase'>
                                                Mark Smith
                                            </span>
                                        </h2>

                                        <p className='fs-15 player-box-des'>
                                            Organically grow the holistic world view of disruptive
                                            innovation via workplace diversity and empowerment.
                                            Bring to the table win-win survival strategies to ensure
                                            proactive domination At the end of the day, going
                                            forward.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            class='carousel-control-prev'
                            type='button'
                            data-bs-target='#carouselExampleInterval'
                            data-bs-slide='prev'
                        >
                            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                            <span class='visually-hidden'>Previous</span>
                        </button>
                        <button
                            class='carousel-control-next'
                            type='button'
                            data-bs-target='#carouselExampleInterval'
                            data-bs-slide='next'
                        >
                            <span class='carousel-control-next-icon' aria-hidden='true'></span>
                            <span class='visually-hidden'>Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayersBasketball;
