import React from 'react';
import './ProfessionalSkill.scss';

function ProfessionalSkill(props) {
    return (
        <div className='container z-1 d-grid bg-light position-absolute professional rp-shadow rounded-end-4'>
            <div className='ms-11'>
                <div className='d-flex justify-content-evenly ryan-number'>
                    <div>
                        <span className='d-block text-uppercase'>Professional Stuff</span>
                        <span className='fs-48 text-uppercase '>
                            Ryan <span className='text-primary fw-bold'>in number</span>
                        </span>
                        <div>
                            The Oxygen FC provides children the opportunity to learn and develop
                            soccer game skills.
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className=''>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-shirt icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>234</span>
                        </div>
                        <span className='d-block fs-13 text-uppercase p-2'>Proud</span>
                        <span className='text-uppercase fw-bold fs-5 ms-2'>Club Members</span>
                    </div>

                    <div className=' box-number'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-medal icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>99%</span>
                        </div>
                        <span className='d-block fs-13 text-uppercase p-2'>Success</span>
                        <span className='text-uppercase fw-bold fs-5 ms-2'>Leauge Range</span>
                    </div>

                    <div className=' box-number'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-arrow-up-right-dots icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>47</span>
                        </div>
                        <span className='d-block fs-13 text-uppercase p-2'>This Season</span>
                        <span className='text-uppercase fw-bold fs-5 ms-2'>Development Teams</span>
                    </div>

                    <div className=' box-number'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-trophy icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>24</span>
                        </div>
                        <span className='d-block fs-13 text-uppercase p-2'>Great History</span>
                        <span className='text-uppercase fw-bold fs-5 ms-2'>Trophies Won</span>
                    </div>
                </div>
            </div>

            <div className='d-flex ms-11 mt-5'>
                <div>
                    <div className='d-flex justify-content-evenly ryan-number1'>
                        <div>
                            <span className='d-block text-uppercase'>Professional Stuff</span>
                            <span className='fs-48 text-uppercase '>
                                Our <span className='text-primary fw-bold'>Skill</span>
                            </span>
                            <div className='my-4'>
                                All members have established successfull and the highest percentage
                                of overall soccer skills.
                            </div>

                            <div className='fs-13'>
                                Bring to the table win-win survival strategies to ensure proactive
                                domination. At the end of the day, going forward, a new normal that
                                has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution. User generated content in real-time will
                                have multiple touchpoints.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='progress-skill'>
                    <div className='p-3'>
                        <span className='fw-bold text-uppercase'>Jumping</span>
                        <div
                            className='progress'
                            role='progressbar'
                            aria-label='Basic example'
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className='progress-bar' style={{ width: '100%' }}>
                                100%
                            </div>
                        </div>
                    </div>

                    <div className='p-3'>
                        <span className='fw-bold text-uppercase'>Tackling</span>
                        <div
                            className='progress'
                            role='progressbar'
                            aria-label='Basic example'
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className='progress-bar' style={{ width: '50%' }}>
                                50%
                            </div>
                        </div>
                    </div>

                    <div className='p-3'>
                        <span className='fw-bold text-uppercase'>Heading</span>
                        <div
                            className='progress'
                            role='progressbar'
                            aria-label='Basic example'
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        >
                            <div className='progress-bar' style={{ width: '75%' }}>
                                75%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalSkill;
