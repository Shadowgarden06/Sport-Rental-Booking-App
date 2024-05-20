import React from 'react';
import './PlayersBasketball.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProfessionalSkill from '../ProfessionalSkill/ProfessionalSkill';

function PlayersBasketball(props) {
    let { baseballPlayers } = props;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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
        <div className='position-relative'>
            <div className='bg-light-subtle'></div>
            <div className='d-flex flex-column bg-player2'>
                <div className='d-flex flex-column justify-content-center align-items-center text-white box-player ms-21 p-5'>
                    <span className=' d-block fs-48 text-uppercase text-center mt-5'>
                        Our <span className='fw-bold text-gray'>Players</span>
                    </span>
                    <div>Senior players with the highest improvement in all games.</div>
                </div>

                <div className='mt-5'>
                    <Carousel responsive={responsive}>
                        {baseballPlayers.map((item, index) => {
                            return (
                                <div key={index} className='d-flex schedule-mar1'>
                                    <div className='d-flex flex-column justify-content-center align-items-center p-1'>
                                        <div>
                                            <img
                                                className='schedule-img rounded-circle'
                                                src={item.image}
                                                alt=''
                                            />
                                        </div>

                                        <div className='p-3 text-white text-center'>
                                            <span className='text-uppercase fs-13 d-block'>
                                                {item.position}
                                            </span>
                                            <span className='d-block fs-5 text-uppercase fw-bold text-white'>
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <ProfessionalSkill />
        </div>
    );
}

export default PlayersBasketball;
