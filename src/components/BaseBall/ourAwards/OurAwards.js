import React from 'react';
import './OurAwards.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AboutClub from '../aboutclub/AboutClub';

function OurAwards(props) {
    let { baseballClubs } = props;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
        <div className='parallax-content15 text-white position-relative'>
            <div className='ms-11 mt-3'>
                <div className='d-flex justify-content-evenly ryan-number'>
                    <div className='text-start'>
                        <span className='d-block text-start text-uppercase'>
                            Professional Stuff
                        </span>
                        <span className='fs-48 text-start text-uppercase '>
                            Games <span className='text-gray fw-bold'>schedule</span>
                        </span>
                        <div>
                            Check out next games in regional league which will be held in the next
                            month in city sport arenas.
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-3 ms-4'>
                <Carousel responsive={responsive}>
                    {baseballClubs.map((item, index) => {
                        return (
                            <div key={index} className='d-flex schedule-mar1'>
                                <div className='d-flex p-1'>
                                    <div>
                                        <img className='schedule-img' src={item.image} alt='' />
                                    </div>

                                    <div className='p-3 text-white'>
                                        <span className='text-uppercase fs-13 d-block'>
                                            {item.stadium}
                                        </span>
                                        <span className='d-block text-uppercase fw-bold text-baseball'>
                                            {item.name}
                                        </span>
                                        <span className='text-uppercase fs-13'>{item.date}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <AboutClub />
        </div>
    );
}

export default OurAwards;
