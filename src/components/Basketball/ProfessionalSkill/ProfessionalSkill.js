import React from 'react';
import './ProfessionalSkill.scss';

function ProfessionalSkill(props) {
    return (
        <div className='z-1 d-grid bg-light professional1 rp-shadow rounded-4'>
            <div className='d-flex justify-content-around p-5'>
                <div className='p-2'>
                    <div className='box-about d-flex flex-column position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/history_inner_14.jpg'
                            alt=''
                            className='about-img1'
                        />

                        <div className='bg-light position-absolute rounded-circle icon-circle2'>
                            <span className='d-block rounded-circle bg-redbasket  icon-circle-size1'>
                                <i style={{ color: '#ffffff' }} class='fa-solid fa-medal'></i>
                            </span>
                        </div>

                        <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                            SENIOR TEAM
                        </span>
                        <p className='text-start fs-13 ps-2'>
                            We are a competitive sport club – with our members competing at all
                            levels from local team galas.
                        </p>
                    </div>
                </div>

                <div className='p-2'>
                    <div className='box-about d-flex flex-column position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/11/home_inner_01.jpg'
                            alt=''
                            className='about-img1'
                        />

                        <div className='bg-light position-absolute rounded-circle icon-circle2'>
                            <span className='d-block rounded-circle bg-redbasket  icon-circle-special'>
                                <i
                                    style={{ color: '#ffffff' }}
                                    class='fa-regular fa-clipboard mb-5'
                                ></i>
                            </span>
                        </div>

                        <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                            TRAINING COURSE
                        </span>
                        <p className='text-start fs-13 ps-2'>
                            In Ryan Club are organized single and team soccer classes for all ages –
                            kids, teenagers or seniors.
                        </p>
                    </div>
                </div>

                <div className='p-2'>
                    <div className='box-about d-flex flex-column position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/11/home_inner_02.jpg'
                            alt=''
                            className='about-img1'
                        />

                        <div className='bg-light position-absolute rounded-circle icon-circle2'>
                            <span className='d-block rounded-circle bg-redbasket  icon-circle-size1'>
                                <i style={{ color: '#ffffff' }} class='fa-solid fa-basketball'></i>
                            </span>
                        </div>

                        <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                            JUNIOR SCHOOL
                        </span>
                        <p className='text-start fs-13 ps-4'>
                            Our players have the highest percentage of overall improvement in all
                            fixtures.
                        </p>
                    </div>
                </div>

                <div className='p-2'>
                    <div className='box-about d-flex flex-column position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/11/home_inner_03.jpg'
                            alt=''
                            className='about-img1'
                        />

                        <div className='bg-light position-absolute rounded-circle icon-circle2'>
                            <span className='d-block rounded-circle bg-redbasket  icon-circle-size1'>
                                <i
                                    style={{ color: '#ffffff' }}
                                    class='fa-solid fa-graduation-cap'
                                ></i>
                            </span>
                        </div>

                        <span className='text-uppercase fw-bold fs-4 mt-3 mb-2 text-start'>
                            BASIC TACTICS
                        </span>
                        <p className='text-start fs-13 ps-4'>
                            The private lessons programme consists of one 30 min. session per week
                            in private gym.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSkill;
