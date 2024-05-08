import React from 'react';
import './Principles.scss';

function Principles(props) {
    return (
        <div className='principles1 d-flex flex-column justify-content-center align-items-center'>
            <div className='principles-club1'>
                <span className='d-block text-center text-uppercase fs-5'>BaseBall Club</span>
                <span className='d-block text-center fs-48 text-uppercase'>
                    Our <span className='fw-bold text-baseball '>Principles</span>
                </span>
                <span>
                    All awards recognize the player with the highest percentage of overall
                    improvement in all events.
                </span>
            </div>

            <div className='d-flex'>
                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon1 text-center text-white fs-1'>
                        <i class='fa-solid fa-baseball'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            Membership
                        </span>
                        <div className='fs-13 '>
                            Collaboratively administrate empowered markets via plug-and-play
                            networks after installed base benefits.
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon1 text-center text-white fs-1'>
                        <i class='fa-solid fa-people-group'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            TeamWork
                        </span>
                        <div className='fs-13 '>
                            Dramatically visualize customer directed convergence without
                            revolutionary and dynamically procrastinate.
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon1 text-center text-white fs-1'>
                        <i class='fa-solid fa-clipboard'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            Encourage
                        </span>
                        <div className='fs-13 '>
                            Taking seamless key performance indicators offline to maximise the long
                            tail. Keeping your eye ball.
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center p-4'>
                    <div className='principles-icon1 text-center text-white fs-1'>
                        <i class='fa-solid fa-baseball-bat-ball'></i>
                    </div>

                    <div className='principle-box '>
                        <span className='d-block text-center text-uppercase fw-bold p-2'>
                            Sportmanship
                        </span>
                        <div className='fs-13 '>
                            Organically grow the holistic world view of disruptive innovation via
                            workplace diversity and empowerment.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principles;
