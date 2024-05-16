import React from 'react';
import GallaryThuan from '../components/Gallery/GallaryThuan';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';

function Gallary(props) {
    return (
        <div>
            <Header/>
            <GallaryThuan/>
            <Footer/>
        </div>
    );
}

export default Gallary;