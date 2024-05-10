import React, { useState } from 'react';
import Header from '../components/HeaderAndFooter/Header';
import HeroBanner from '../components/Sports/heroBanner/HeroBanner';
import IndoorAndOutdoor from '../components/Sports/Indoor&Outdoor/IndoorAndOutdoor';
import Stadium from '../components/Sports/Stadium/Stadium';
import Subcribes from '../components/Sports/Subcribes/Subcribes';
import Footer from '../components/HeaderAndFooter/Footer';

function Sports(props) {
    return (
        <div>
            <Header />
            <HeroBanner />
            <IndoorAndOutdoor />
            <Stadium />
            <Subcribes />
            <Footer />
        </div>
    );
}

export default Sports;
