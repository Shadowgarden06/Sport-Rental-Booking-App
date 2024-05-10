import React from 'react';
import './Subcribes.scss';
import { useNavigate } from 'react-router-dom';

function Subcribes(props) {
    const navigate = useNavigate();

    return (
        <div className='box-banner1 d-flex'>
            <div className='subscribe-box'>
                <span className='text-uppercase fw-bold fs-80'>
                    Stay up to <span className='d-block text-sports'>date with us</span>
                </span>
                <div className='fs-5 mt-3'>
                    Don’t miss out. Receive our newsletters, electrifying event and/or service
                    updates, occasional customer surveys and irresistible offers from us, our
                    sponsors and partners.
                </div>
                <button
                    className='btn bg-success mt-4 w-25 text-white text-uppercase fw-bold'
                    onClick={() => {
                        navigate('/register');
                    }}
                >
                    Subscribe
                </button>
            </div>

            <div className='p-4 ms-5'>
                <span className='p-3 text-uppercase fw-bold'>Follow</span>
                <div className='d-flex justify-content-evenly'>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-facebook.svg?v=1'
                            alt=''
                        />
                    </a>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-instagram.svg?v=1'
                            alt=''
                        />
                    </a>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-twitter.svg?v=1'
                            alt=''
                        />
                    </a>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-linkedin-dark.svg?v=1'
                            alt=''
                        />
                    </a>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-youtube.svg?v=1'
                            alt=''
                        />
                    </a>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-tiktok.svg?v=1'
                            alt=''
                        />
                    </a>
                    <a href='/' className='p-3'>
                        <img
                            src='https://www.sportshub.com.sg/themes/custom/sportshubsg/assets/images/icons/icon-whatsapp.svg?v=1'
                            alt=''
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Subcribes;
