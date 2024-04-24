import React from 'react';
import basketball from './tải xuống (1).jpg';
import './HomePage.css'
import badminton from './Link 8.jpg';
import baseball from './Indoor Batting Cages for Baseball & Softball _ On Deck Sports.jpg';
import football from './Football.jpg';
function Image({count}) {
            if (count===0) {
                return <img src={basketball} className='hinh_anh'/>
            }
            else if (count===1) {
                return <img src={badminton} className='hinh_anh'/>
            }
            else if (count===2) {
                return <img src={baseball} className='hinh_anh'/>
            }
            else if (count===3) {
                return <img src={football} className='hinh_anh'/>
            }
            return(
                <div class="carousel-item active" data-bs-interval="10000">
        
                     </div>
            )
}

export default Image;