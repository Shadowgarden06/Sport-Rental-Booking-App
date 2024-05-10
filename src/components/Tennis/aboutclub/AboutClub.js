import React from 'react';
import './AboutClub.scss';

function AboutClub(props) {
    return (
        <div className='position-relative'>
            <div className='container z-1 d-grid bg-light position-absolute bottom-34 rp-shadow rounded-end-4'>
                <div className='row'>
                    <div className='col p-8 '>
                        <div className='w-580'>
                            <span className='d-block text-start text-uppercase fs-5'>
                                Learn More
                            </span>
                            <span className='d-block text-start text-uppercase fs-60 my-3'>
                                About <span className='text-green fw-bold'>Club</span>
                            </span>
                            <div className='text-start fs-5 mb-3'>
                                The Club provides children the opportunity to learn and develop
                                basketball skills.
                            </div>

                            <p className='text-start'>
                                Leverage agile frameworks to provide a robust synopsis for high
                                level overviews. Iterative approaches to corporate strategy foster
                                collaborative thinking to further the overall value proposition.
                                Organically grow the holistic world view of disruptive innovation
                                via workplace diversity and empowerment.
                            </p>

                            <p className='text-start mb-5'>
                                Bring to the table win-win survival strategies to ensure proactive
                                domination. At the end of the day, going forward, a new normal that
                                has evolved from generation X is on the runway heading towards a
                                streamlined cloud solution.
                            </p>

                            <div className='d-flex text-start'>
                                <button className='btn btn-primary bg-green fs-10 about-btn fw-bold text-uppercase me-4 p-2'>
                                    Join The Club
                                </button>
                                <button className='btn btn-white fs-10 about-btn fw-bold text-uppercase p-2 text-green border-green'>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='col p-0'>
                        <img
                            src='https://oxigeno.bold-themes.com/tennis/wp-content/uploads/sites/4/2017/10/inner_service.jpg'
                            alt='final'
                            className='final-report1 rounded-end-4'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutClub;
