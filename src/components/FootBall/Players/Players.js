import React, { useEffect, useState } from 'react';
import './Players.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Players(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./data/football/footballer.json')
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

    return (
        <div>
            <div className='bg-light-subtle bg-professional'></div>
            <div className='bg-primary bg-player'>
                <div className='text-white box-player ms-8 pt-6'>
                    <span className='fs-48 text-uppercase'>
                        Player <span className='fw-bold'>Testimonials</span>
                    </span>
                    <div>
                        Oxygen Soccer Club has been hosting over 1,200 players ages 4 to 16 every
                        year at its Indoor and Outdoor, Recreational and Rep Programs.
                    </div>
                </div>

                <div className='ms-8'>
                    <Carousel responsive={responsive}>
                        {players.map((item, index) => {
                            return (
                                <div className='d-flex mt-5 ms-6' key={index}>
                                    <div>
                                        <img src={item.image} alt='' className='player-img' />
                                    </div>

                                    <div className='ms-5 text-white box-player-des'>
                                        <h2>
                                            <span className='fs-13 d-block text-uppercase'>
                                                {item.team}
                                            </span>
                                            <span className='fs-5 fw-bold text-uppercase'>
                                                {item.name}
                                            </span>
                                        </h2>

                                        <p className='fs-15'>{item.describe}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Players;
