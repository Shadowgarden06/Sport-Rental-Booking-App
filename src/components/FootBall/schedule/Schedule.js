import React from 'react';
import './Schedule.scss';

function Schedule(props) {
    return (
        <div class='parallax' id='parallax'>
            <div class='parallax-bg'></div>
            <div class='parallax-content'>
                <h1>Next Game</h1>

                <div id='carouselExampleInterval' class='carousel slide' data-bs-ride='carousel'>
                    <div class='carousel-inner'>
                        <div class='carousel-item active' data-bs-interval='3000'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/races_logo_01.png'
                                class='d-block w-100'
                                alt='...'
                                className='schedule-img'
                            />
                        </div>
                        <div class='carousel-item' data-bs-interval='3000'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/races_logo_02.png'
                                class='d-block w-100'
                                alt='...'
                                className='schedule-img'
                            />
                        </div>
                        <div class='carousel-item' data-bs-interval='3000'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/races_logo_03.png'
                                class='d-block w-100'
                                alt='...'
                                className='schedule-img'
                            />
                        </div>
                        <div class='carousel-item' data-bs-interval='3000'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/races_logo_04.png'
                                class='d-block w-100'
                                alt='...'
                                className='schedule-img'
                            />
                        </div>
                        <div class='carousel-item' data-bs-interval='3000'>
                            <img
                                src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/races_logo_05.png'
                                class='d-block w-100'
                                alt='...'
                                className='schedule-img'
                            />
                        </div>
                    </div>

                    <button
                        class='carousel-control-prev'
                        type='button'
                        data-bs-target='#carouselExampleInterval'
                        data-bs-slide='prev'
                    >
                        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Previous</span>
                    </button>
                    <button
                        class='carousel-control-next'
                        type='button'
                        data-bs-target='#carouselExampleInterval'
                        data-bs-slide='next'
                    >
                        <span class='carousel-control-next-icon' aria-hidden='true'></span>
                        <span class='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
