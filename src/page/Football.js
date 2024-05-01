import React from 'react';
import CarouselComponent from '../components/FootBall/carousuel/CarouselComponent';
import GameReport from '../components/FootBall/gameReport/GameReport';
import Schedule from '../components/FootBall/schedule/Schedule';

function Football(props) {
    return (
        <div className='Football position-relative'>
            <CarouselComponent />
            <GameReport />
            <Schedule />
        </div>
    );
}

export default Football;
