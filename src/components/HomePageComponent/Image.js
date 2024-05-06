import React from 'react';
import basketball from '../HomePageComponent/img/tải xuống (1).jpg';
import '../HomePageComponent/css/HomePage.css';
import badminton from '../HomePageComponent/img/Link 8.jpg';
import baseball from '../HomePageComponent/img/Indoor Batting Cages for Baseball & Softball _ On Deck Sports.jpg';
import football from '../HomePageComponent/img/Football.jpg';
function Image({ count }) {
    if (count === 0) {
        return <img src={basketball} className='hinh_anh' alt='basketball' />;
    } else if (count === 1) {
        return <img src={badminton} className='hinh_anh' alt='badminton' />;
    } else if (count === 2) {
        return <img src={baseball} className='hinh_anh' alt='baseball' />;
    } else if (count === 3) {
        return <img src={football} className='hinh_anh' alt='football' />;
    }
    return <div class='carousel-item active' data-bs-interval='10000'></div>;
}

export default Image;
