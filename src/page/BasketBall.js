import React from 'react';
import CarouselComponent from '../components/Basketball/carousuel/CarouselComponent';
import Principles from '../components/Basketball/principles/Principles';
import GameReport from '../components/Basketball/gameReport/GameReport';
import PlayersBasketball from '../components/Basketball/Players/PlayersBasketball';
import TimeTable from '../components/Basketball/timeTable/TimeTable';
import ProfessionalSkill from '../components/Basketball/ProfessionalSkill/ProfessionalSkill';
import Activities from '../components/Basketball/activities/Activities';
import OurAwards from '../components/Basketball/ourAwards/OurAwards';
import Footer from '../components/HeaderAndFooter/Footer';
import Header from '../components/HeaderAndFooter/Header';
import AboutClub from '../components/Basketball/aboutclub/AboutClub';

function BasketBall(props) {
    return (
        <div className='Basketball position-relative'>
            <Header />
            <CarouselComponent />
            <Principles />
            <GameReport />
            <PlayersBasketball />
            <TimeTable />
            <ProfessionalSkill />
            <Activities />
            <OurAwards />
            <AboutClub />
            <Footer />
        </div>
    );
}

export default BasketBall;
