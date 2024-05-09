import React from 'react';
import './ProfessionalSkill.scss';

function ProfessionalSkill(props) {
    return (
        <div className='position-relative'>
            <div className='container z-1 d-grid bg-light position-absolute professional5 rp-shadow rounded-4'>
                <div className='d-flex justify-content-around p-5'>
                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/tennis/wp-content/uploads/sites/4/2017/10/history_inner_14.jpg'
                                alt=''
                                className='about-img1'
                            />

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                SENIOR TEAM
                            </span>
                            <p className='text-start fs-13 ps-2'>
                                We are a competitive sport club – with our members competing at all
                                levels from local team galas.
                            </p>

                            <button className='btn text-uppercase text-green border-green'>
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/tennis/wp-content/uploads/sites/4/2017/10/history_inner_13.jpg'
                                alt=''
                                className='about-img1'
                            />

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                TRAINING COURSE
                            </span>
                            <p className='text-start fs-13 ps-2'>
                                In Ryan Club are organized single and team soccer classes for all
                                ages – kids, teenagers or seniors.
                            </p>

                            <button className='btn text-uppercase text-green border-green'>
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/tennis/wp-content/uploads/sites/4/2017/10/history_inner_12.jpg'
                                alt=''
                                className='about-img1'
                            />

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                JUNIOR SCHOOL
                            </span>
                            <p className='text-start fs-13 ps-4'>
                                Our players have the highest percentage of overall improvement in
                                all fixtures.
                            </p>

                            <button className='btn text-uppercase text-green border-green'>
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className='box-about d-flex flex-column position-relative'>
                            <img
                                src='https://oxigeno.bold-themes.com/tennis/wp-content/uploads/sites/4/2017/10/history_inner_11.jpg'
                                alt=''
                                className='about-img1'
                            />

                            <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                                BASIC TACTICS
                            </span>
                            <p className='text-start fs-13 ps-4'>
                                The private lessons programme consists of one 30 min. session per
                                week in private gym.
                            </p>

                            <button className='btn text-uppercase text-green border-green'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSkill;
