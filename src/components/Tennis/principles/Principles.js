import React from 'react';
import './Principles.scss';

function Principles(props) {
    return (
        <div className='principles d-flex flex-column justify-content-center align-items-center'>
            <div className='principles-club1'>
                <span className='d-block text-center text-uppercase fs-5'>Tennis Club</span>
                <span className='fs-48 text-uppercase'>
                    Our <span className='fw-bold text-green '>Principles</span>
                </span>
            </div>

            <div className='d-flex'>
                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon2 text-center text-white fs-1'>
                        <i class='fa-solid fa-table-tennis-paddle-ball'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            Proficiency
                        </span>
                        <div className='fs-13 '>
                            Nanotechnology immersion along the information highway will close the
                            loop on focusing solely line.
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon2 text-center text-white fs-1'>
                        <i class='fa-solid fa-right-to-bracket'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            Participation
                        </span>
                        <div className='fs-13 '>
                            Capitalize on low hanging fruit to identify a ballpark value added
                            activity to beta test override the digital.
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon2 text-center text-white fs-1'>
                        <i class='fa-solid fa-clipboard'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            Lessons
                        </span>
                        <div className='fs-13 '>
                            Bring to the table win-win survival strategies to ensure proactive
                            domination. At the end of the day going.
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon2 text-center text-white fs-1'>
                        <i class='fa-solid fa-people-roof'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            TeamWork
                        </span>
                        <div className='fs-13 '>
                            Evolved from generation X is on the runway heading towards a streamlined
                            cloud solution and more users.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principles;
