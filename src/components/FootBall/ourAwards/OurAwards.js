import React from 'react';
import './OurAwards.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function OurAwards(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='parallax3' id='parallax3'>
            <div className='parallax-bg3'></div>
            <div className='parallax-content3'>
                <div className='d-flex justify-content-around mb-8'>
                    <div className='text-white box-awards'>
                        <span className='d-block text-uppercase text-start fs-48 text-start'>
                            {' '}
                            Our <span className='fw-bold'>Awards</span>
                        </span>
                        <div className='text-start'>
                            All awards recognize the players with the highest percentage of overall
                            improvement in all events.
                        </div>
                    </div>

                    <div className='me-1 '>
                        <button className='btn btn-transparent border border-white text-white'>
                            Join the Club
                        </button>
                    </div>
                </div>

                <Carousel responsive={responsive}>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_03.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_02.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_07.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_06.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_08.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_04.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_01.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_05.png'
                            alt=''
                        />
                    </div>
                    <div>
                        <img
                            src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/Trophy_05.png'
                            alt=''
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default OurAwards;
