import React, { useEffect, useState } from 'react';
import CarouselComponent from '../components/BaseBall/carousuel/CarouselComponent';
import GameReport from '../components/BaseBall/gameReport/GameReport';
import TimeTable from '../components/BaseBall/timeTable/TimeTable';
import OurAwards from '../components/BaseBall/ourAwards/OurAwards';
import AboutClub from '../components/BaseBall/aboutclub/AboutClub';
import Principles from '../components/BaseBall/principles/Principles';
import PlayersBasketball from '../components/BaseBall/Players/PlayersBasketball';
import Activities from '../components/BaseBall/activities/Activities';
import Footer from '../components/HeaderAndFooter/Footer';
import Header from '../components/HeaderAndFooter/Header';
import ProfessionalSkill from '../components/BaseBall/ProfessionalSkill/ProfessionalSkill';

function BaseBall(props) {
    const [baseballClubs, setBaseballClubs] = useState([]);
    const [baseballPlayers, setBaseballPlayers] = useState([]);

    useEffect(() => {
        fetch('./data/baseball/baseballClub.json')
            .then((res) => res.json())
            .then((data) => setBaseballClubs(data));
    }, []);

    useEffect(() => {
        fetch('./data/baseball/baseballPlayers.json')
            .then((res) => res.json())
            .then((data) => setBaseballPlayers(data));
    }, []);

    return (
        <div className='Baseball position-relative'>
            <Header />
            <CarouselComponent />
            <GameReport />
            <TimeTable />
            <OurAwards baseballClubs={baseballClubs} />
            <AboutClub />
            <Principles />
            <PlayersBasketball baseballPlayers={baseballPlayers} />
            <Activities />
            <ProfessionalSkill />
            <Footer />
        </div>
    );
}

export default BaseBall;
