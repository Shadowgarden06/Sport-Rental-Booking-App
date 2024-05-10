import React from 'react';
import './HeroBanner.scss';

function HeroBanner(props) {
    return (
        <div className='heroBanner'>
            <div className='box-banner'>
                <span className='fs-sports-65 text-uppercase fw-bold mt-5 border-top border-warning py-5'>
                    Sports
                </span>
                <p className='fs-5 text-light mt-4'>
                    Come and explore a world of sports and entertainment. Play, train and workout in
                    the same venues as our national athletes.
                </p>
            </div>
        </div>
    );
}

export default HeroBanner;
