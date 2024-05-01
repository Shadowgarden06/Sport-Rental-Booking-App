import React from 'react';
import './css/Header.css';
import background from './img/background.png';

function HeaderBack(props) {
    return (
        <div className='background'>
            <div className='discr'>
                <h1 className='uppercase'>Game on.</h1>
                <p className='uppercase-2'>Play any sport, right here!.</p>
                <p className='text-uppercase fs-1'>Choose the dome!.</p>
            </div>
            <img src={background} alt='' />
        </div>
    );
}

export default HeaderBack;
