import React from 'react';
import './IndoorAndOutdoor.scss';
import { useNavigate } from 'react-router-dom';

function IndoorAndOutdoor(props) {
    const navigate = useNavigate();

    return (
        <div className='box-banner1'>
            <div className='fs-80 text-uppercase fw-bold'>
                <span className='d-block text-sports'>Sports</span> for everyone
            </div>
            <div>
                <span className='d-block fs-1 text-uppercase fw-bold mt-5 mb-3'>Indoor Sports</span>
                <div className='d-flex justify-content-evenly'>
                    <div
                        className='position-relative sports-img-box'
                        onClick={() => {
                            navigate('/basketball');
                        }}
                    >
                        <img
                            src='https://storage.googleapis.com/pod_public/1300/180358.jpg'
                            alt=''
                            className='sports-img'
                        />
                        <span className='position-absolute sports-img-name text-uppercase fw-bold fs-2'>
                            BasketBall
                        </span>
                    </div>

                    <div
                        className='position-relative sports-img-box'
                        onClick={() => {
                            navigate('/tennis');
                        }}
                    >
                        <img
                            src='https://vtv1.mediacdn.vn/zoom/640_400/2018/11/25/5af81423deea5image-15431019534061098857382.jpg'
                            alt=''
                            className='sports-img'
                        />
                        <span className='position-absolute sports-img-name1 text-uppercase fw-bold fs-2'>
                            Tennis
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <span className='d-block fs-1 text-uppercase fw-bold mt-5 mb-3'>
                    Outdoor Sports
                </span>
                <div className='d-flex justify-content-evenly'>
                    <div
                        className='position-relative sports-img-box'
                        onClick={() => {
                            navigate('/football');
                        }}
                    >
                        <img
                            src='https://t3.ftcdn.net/jpg/03/55/28/80/360_F_355288042_An4jhyVFELBAY05m97yMQYDTDpNKeeJf.jpg'
                            alt=''
                            className='sports-img'
                        />
                        <span className='position-absolute sports-img-name text-uppercase fw-bold fs-2'>
                            Football
                        </span>
                    </div>

                    <div
                        className='position-relative sports-img-box'
                        onClick={() => {
                            navigate('/baseball');
                        }}
                    >
                        <img
                            src='https://www.kreedon.com/wp-content/uploads/2019/01/GettyImages-844016022.jpg'
                            alt=''
                            className='sports-img'
                        />
                        <span className='position-absolute sports-img-name1 text-uppercase fw-bold fs-2'>
                            BaseBall
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndoorAndOutdoor;
