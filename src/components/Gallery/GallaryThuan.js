import React, { useState } from 'react';
import './CuuTao2.css';

function GallaryThuan(props) {
    const [modalSrc, setModalSrc] = useState(null);

    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYYAClK-GqMT0o0gYDpHbs9p4UnnObWwBU4g&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7CKSyyEV-JQBas6itY4FOEywUf6RQc42Ktm8W-AOigNATZwUocASSdi_xoRa70YfaiE&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oYyEMzt8e9DiqsaI0NtpY3O3nV4842koVQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnK3GAIeU841GcoYJWvLikVoVf22cXn_s1HP2nZXxGzVyDgVCroMWXqBjpIkwqhjbGMt4&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQF5cuALOLWunRnnKZ0Up7jkf39TWrFFqcLQ&usqp=CAU',
        'https://cdn.shopvnb.com/uploads/images/tin_tuc/chi-phi-choi-tennis-2.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15kcI8EIqybNNlWZJZHi385VMi28PEI5hK5aUpstHn8-JJARnkuZZTBD9Y1rJfe2qGEI&usqp=CAU',
        'https://c.pxhere.com/photos/73/b7/baseball_game_competition_batter_catcher_umpire_home_plate_pitch-1287435.jpg!d',
        'https://c.pxhere.com/photos/fb/39/baseball_baseball_player_pitcher_catcher_game_ball_sport_uniform-596722.jpg!d',
        'https://c.pxhere.com/photos/c8/6e/baseball_batter_hit_swinging_player_bat_athlete_young-567015.jpg!d',
        'https://vcdn-suckhoe.vnecdn.net/2022/05/18/HUY-4060-9778-1652865090.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-sHiDQhexapgfXgSFC2qKagrvfJdFanF_w&usqp=CAU'
    ];

    const openModal = (src) => {
        setModalSrc(src);
    };

    const closeModal = () => {
        setModalSrc(null);
    };

    return (
        
        <div className='thuanbody'>
            <div>
            <p className='thuantitle'>
                Not just  <span>an image</span> This is  <span>a memory</span>
            </p>
            </div>
            <div className="gallery">
                {images.map((src, index) => (
                    <img 
                        key={index}
                        src={src}
                        alt="Gallery image"
                        onClick={() => openModal(src)}
                    />
                ))}
            </div>

            {modalSrc && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={modalSrc} alt="Full-size image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default GallaryThuan;
