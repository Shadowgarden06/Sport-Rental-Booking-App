import React, { useEffect, useState } from 'react';
import './CarouselBasketball.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GameReport from '../gameReport/GameReport';

function CarouselComponent(props) {
    const [basketballClubs, setBasketballClubs] = useState([]);

    useEffect(() => {
        fetch('./data/basketball/basketballClub.json')
            .then((res) => res.json())
            .then((data) => setBasketballClubs(data));
    }, []);

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
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='parallax-basketball position-relative'>
            <div className='text-center text-light p-5'>
                <span className='span-basketball text-uppercase text-white'>BasketBall Club</span>
                <h1 className='text-basketball lh-1 my-2'>
                    <span className='fw-bold text-orange text-uppercase'>
                        Believe <span className='text-white'>&</span> Archive
                    </span>
                </h1>
            </div>

            <div className='mt-50'>
                <Carousel responsive={responsive}>
                    {basketballClubs.map((item, index) => {
                        return (
                            <div key={index} className='d-flex schedule-basketclub'>
                                <div className='d-flex p-1'>
                                    <div>
                                        <img className='schedule-img' src={item.image} alt='' />
                                    </div>

                                    <div className='p-3 text-white infor-club'>
                                        <span className='text-uppercase fs-13 d-block'>
                                            {item.stadium}
                                        </span>
                                        <span className='d-block text-uppercase fw-bold text-orange'>
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
            <GameReport />
        </div>
    );
}

export default CarouselComponent;
