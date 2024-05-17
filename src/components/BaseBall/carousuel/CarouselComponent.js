import React from 'react';
import './CarouselBasketball.scss';
import GameReport from '../gameReport/GameReport';

function CarouselComponent(props) {
    return (
        <div className='parallax-content7 position-relative'>
            <div className='text-center text-light p-4 mt-5'>
                <span className='fs-3 text-uppercase text-white'>Ryan BaseBall</span>
                <h1 className='fs-78 lh-1 my-2'>
                    <span>
                        <span className='text-gray text-uppercase fw-bold'>Attitude</span> is{' '}
                        <span className='text-white text-uppercase'>Everything</span>
                    </span>
                </h1>
            </div>
            <GameReport />
        </div>
    );
}

export default CarouselComponent;
