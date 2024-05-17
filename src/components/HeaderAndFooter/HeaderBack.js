import React from 'react';
import '../HeaderAndFooter/css/Header.css';
import background from './img/background.png';

function HeaderBack(props) {
    return (
        <div className='background'>
            <div className='discr'>
                <h1 className='uppercase'>Game on.</h1>
                <p className='uppercase-2 a'>Play any sport, right here!.</p>
                <p className='text-uppercase fs-1'>Choose the dome!.</p>
            </div>
        </div>
    );
}

export default HeaderBack;
