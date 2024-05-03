import React from 'react';
import './AboutClub.scss';

function AboutClub(props) {
    return (
        <div className='parallax1' id='parallax1'>
            <div className='parallax-bg1'></div>
            <div className='parallax-content1'>
                <div className='d-flex ms-8 mb-5'>
                    <div className='w-580'>
                        <span className='d-block text-start text-uppercase fs-5'>Learn More</span>
                        <span className='d-block text-start text-uppercase fs-60 my-3'>
                            About <span className='text-primary fw-bold'>Club</span>
                        </span>
                        <div className='text-start fs-5 mb-3'>
                            With a membership of 190+ soccer players drawn, we have a high level of
                            competition.
                        </div>

                        <p className='text-start'>
                            Leverage agile frameworks to provide a robust synopsis for high level
                            overviews. Iterative approaches to corporate strategy foster
                            collaborative thinking to further the overall value proposition.
                            Organically grow the holistic world view of disruptive innovation via
                            workplace diversity and empowerment.
                        </p>

                        <div className='d-flex text-start'>
                            <button className='btn btn-primary fs-10 about-btn fw-bold text-uppercase me-4 p-2'>
                                Read More
                            </button>
                            <button className='btn btn-white fs-10 about-btn fw-bold text-uppercase p-2 text-primary border border-primary'>
                                Team Club
                            </button>
                        </div>
                    </div>
                </div>

                <div className='d-flex me-100 ms-8 justify-content-around mt-9'>
                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/history_inner_14.jpg'
                                alt=''
                                className='about-img'
                            />

                            <div className='bg-white position-absolute rounded-circle icon-circle'>
                                <span className='d-block rounded-circle bg-primary  icon-circle-size'>
                                    <i style={{ color: '#ffffff' }} class='fa-solid fa-medal'></i>
                                </span>
                            </div>

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                Competitive Team
                            </span>
                            <p className='text-start fs-13 ps-2'>
                                We are a competitive sport club – with our members competing at all
                                levels from local team galas.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/11/home_inner_01.jpg'
                                alt=''
                                className='about-img'
                            />

                            <div className='bg-white position-absolute rounded-circle icon-circle'>
                                <span className='d-block rounded-circle bg-primary  icon-circle-size'>
                                    <i
                                        style={{ color: '#ffffff' }}
                                        class='fa-regular fa-clipboard mb-5'
                                    ></i>
                                </span>
                            </div>

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                COACHING COURSES
                            </span>
                            <p className='text-start fs-13 ps-2'>
                                In Ryan Club are organized single and team soccer classes for all
                                ages – kids, teenagers or seniors.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/11/home_inner_02.jpg'
                                alt=''
                                className='about-img'
                            />

                            <div className='bg-white position-absolute rounded-circle icon-circle'>
                                <span className='d-block rounded-circle bg-primary  icon-circle-size'>
                                    <i style={{ color: '#ffffff' }} class='fa-solid fa-futbol'></i>
                                </span>
                            </div>

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                SOCCER SCHOOL
                            </span>
                            <p className='text-start fs-13 ps-4'>
                                Our players have the highest percentage of overall improvement in
                                all fixtures.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/11/home_inner_03.jpg'
                                alt=''
                                className='about-img'
                            />

                            <div className='bg-white position-absolute rounded-circle icon-circle'>
                                <span className='d-block rounded-circle bg-primary  icon-circle-size'>
                                    <i
                                        style={{ color: '#ffffff' }}
                                        class='fa-solid fa-graduation-cap'
                                    ></i>
                                </span>
                            </div>

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                PRIVATE LESSONS
                            </span>
                            <p className='text-start fs-13 ps-4'>
                                The private lessons programme consists of one 30 min. session per
                                week in private gym.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutClub;
