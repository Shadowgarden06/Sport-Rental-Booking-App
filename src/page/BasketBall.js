import React, { useEffect, useState } from 'react';
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
import Login from './SignUp&&Login/Login';
import RentalPrice from '../components/Basketball/RentalPrice/RentalPrice';

function BasketBall(props) {
    const [open, setOpen] = useState(false);
    const { showAvatar, setShowAvatar, saveInfo } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='Basketball'>
            <Login
                saveInfo={saveInfo}
                setOpen={setOpen}
                open={open}
                showAvatar={showAvatar}
                setShowAvatar={setShowAvatar}
            />
            <Header
                open={open}
                setOpen={setOpen}
                showAvatar={showAvatar}
                setShowAvatar={setShowAvatar}
            />
            <CarouselComponent />
            <Principles />
            {/* <GameReport /> */}
            <PlayersBasketball />
            {/* <ProfessionalSkill /> */}
            <TimeTable />
            <Activities />
            <OurAwards />
            {/* <AboutClub /> */}
            <RentalPrice />
            <Footer />
        </div>
    );
}

export default BasketBall;
