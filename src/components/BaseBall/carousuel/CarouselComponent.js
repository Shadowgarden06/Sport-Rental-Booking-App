import React from 'react';
import './CarouselBasketball.scss';

function CarouselComponent(props) {
    return (
        <div className='parallax13' id='parallax13'>
            <div className='parallax-bg13'></div>
            <div className='parallax-content7'>
                <div className='text-center text-light position-absolute bottom-40 start-21 p-4'>
                    <span className='fs-3 text-uppercase text-white'>Ryan BaseBall</span>
                    <h1 className='fs-78 lh-1 my-2'>
                        <span>
                            <span className='text-gray text-uppercase fw-bold'>Attitude</span> is{' '}
                            <span className='text-white text-uppercase'>Everything</span>
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CarouselComponent;
