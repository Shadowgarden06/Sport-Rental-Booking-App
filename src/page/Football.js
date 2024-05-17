import React, { useEffect, useState } from 'react';
import CarouselComponent from '../components/FootBall/carousuel/CarouselComponent';
import GameReport from '../components/FootBall/gameReport/GameReport';
import Schedule from '../components/FootBall/schedule/Schedule';
import AboutClub from '../components/FootBall/aboutclub/AboutClub';
import OurAwards from '../components/FootBall/ourAwards/OurAwards';
import Header from '../components/HeaderAndFooter/Header';
import ProfessionalSkill from '../components/FootBall/ProfessionalSkill/ProfessionalSkill';
import Players from '../components/FootBall/Players/Players';
import Activities from '../components/FootBall/activities/Activities';
import Footer from '../components/HeaderAndFooter/Footer';
import Login from './SignUp&&Login/Login';
import RentalPrice from '../components/FootBall/RentalPrice/RentalPrice';

function Football(props) {
    let { showAvatar, setShowAvatar, saveInfo } = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='Football'>
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
            {/* <GameReport /> */}
            <Schedule />
            <AboutClub />
            <OurAwards />
            {/* <ProfessionalSkill /> */}
            <Players />
            <Activities />
            <RentalPrice />
            <Footer />
        </div>
    );
}

export default Football;
