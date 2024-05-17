import React, { useEffect, useState } from 'react';
import GallaryThuan from '../components/Gallery/GallaryThuan';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';
import Login from './SignUp&&Login/Login';

function Gallary(props) {
    let { showAvatar, setShowAvatar, saveInfo } = props;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
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
            <GallaryThuan />
            <Footer />
            <div>CUU TÁo</div>
        </div>
    );
}

export default Gallary;
