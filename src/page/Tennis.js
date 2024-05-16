import React, { useEffect, useState } from 'react';
import CarouselComponent from '../components/Tennis/carousuel/CarouselComponent';
import OurAwards from '../components/Tennis/ourAwards/OurAwards';
import TimeTable from '../components/Tennis/timeTable/TimeTable';
import Principles from '../components/Tennis/principles/Principles';
import Players from '../components/Tennis/Players/Players';
import AboutClub from '../components/Tennis/aboutclub/AboutClub';
import Activities from '../components/Tennis/activities/Activities';
import Footer from '../components/HeaderAndFooter/Footer';
import Header from '../components/HeaderAndFooter/Header';
import ProfessionalSkill from '../components/Tennis/ProfessionalSkill/ProfessionalSkill';
import Login from './SignUp&&Login/Login';

function Tennis(props) {
    const [tennisPlayers, setTennisPlayers] = useState([]);
    let {showAvatar,setShowAvatar,saveInfo } = props
    const [open, setOpen] = useState(false);
    useEffect(() => {
        fetch('./data/tennis/tennisPlayers.json')
            .then((res) => res.json())
            .then((data) => setTennisPlayers(data));
    }, []);

    return (
        <div className='Tennis'>
           <Login saveInfo={saveInfo} setOpen = {setOpen} open = {open} showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>
            <Header open={open} setOpen={setOpen} showAvatar={showAvatar} setShowAvatar={setShowAvatar}/>
            <CarouselComponent />
            <ProfessionalSkill />
            <OurAwards />
            <TimeTable />
            <Principles />
            <AboutClub />
            <Players tennisPlayers={tennisPlayers} />
            <Activities />
            <Footer />
        </div>
    );
}

export default Tennis;
