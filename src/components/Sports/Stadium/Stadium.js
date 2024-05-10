import React from 'react';
import './Stadium.scss';

function Stadium(props) {
    return (
        <div className='d-flex mt-5 p-5'>
            <div className='d-flex flex-column'>
                <span className='fs-80 fw-bold text-uppercase text-primary'>Ryan Sport Club</span>
                <span className='fs-70'>HOME TO FOUR NATIONAL SPORTS ASSOCIATIONS</span>
                <div className='fs-5'>
                    The Ryan Sport Club is home to the Tennis Association Viet Nam, Basketball
                    Association of Viet Nam, BaseBall Viet Nam, Football Viet Nam.
                </div>
            </div>

            <div>
                <img
                    src='https://baovephapluat.vn/data/images/0/2022/07/09/lanhnd/nhathidau-18.jpeg?dpi=150&quality=100&w=820'
                    alt=''
                    className='rented-stadium-img'
                />
            </div>
        </div>
    );
}

export default Stadium;
