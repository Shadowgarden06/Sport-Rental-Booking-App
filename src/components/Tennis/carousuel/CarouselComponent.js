import React from 'react';
import './CarouselBasketball.scss';

function CarouselComponent(props) {
    return (
        <div className='parallax20' id='parallax20'>
            <div className='parallax-bg20'></div>
            <div className='parallax-content20 ms-5'>
                <div className='text-start position-absolute p-4'>
                    <span className='fs-3 d-block text-uppercase text-start text-black ms-5'>
                        Tennis Club
                    </span>
                    <h1 className='fs-78 lh-1 my-2 carousel-box ms-5'>
                        <span className='fw-bold d-block text-green text-uppercase'>
                            Keep Calm <span className='text-black'>&</span> Smash Hard
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CarouselComponent;
