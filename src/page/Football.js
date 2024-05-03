import React from 'react';
import CarouselComponent from '../components/FootBall/carousuel/CarouselComponent';
import GameReport from '../components/FootBall/gameReport/GameReport';
import Schedule from '../components/FootBall/schedule/Schedule';
import AboutClub from '../components/FootBall/aboutclub/AboutClub';
import OurAwards from '../components/FootBall/ourAwards/OurAwards';
import Header from '../components/HeaderAndFooter/Header';
import ProfessionalSkill from '../components/FootBall/ProfessionalSkill/ProfessionalSkill';

function Football(props) {
    return (
        <div className='Football position-relative'>
            <Header />
            <CarouselComponent />
            <GameReport />
            <Schedule />
            <AboutClub />
            <OurAwards />
            <ProfessionalSkill />
        </div>
    );
}

export default Football;
