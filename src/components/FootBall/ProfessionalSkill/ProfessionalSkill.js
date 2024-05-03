import React from 'react';
import './ProfessionalSkill.scss';

function ProfessionalSkill(props) {
    return (
        <div className='container z-1 d-grid bg-light position-absolute top-100 rp-shadow rounded-end-4'>
            <div>
                <div className='d-flex justify-content-evenly'>
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
            </div>
        </div>
    );
}

export default ProfessionalSkill;
