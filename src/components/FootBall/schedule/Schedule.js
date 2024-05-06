import React, { useEffect, useState } from 'react';
import './Schedule.scss';

function Schedule(props) {
    const [footballClubs, setFootballClubs] = useState([]);

    useEffect(() => {
        fetch('./data/football/footballClub.json')
            .then((res) => res.json())
            .then((data) => setFootballClubs(data));
    }, []);

    return (
        <div className='parallax' id='parallax'>
            <div className='parallax-bg'></div>
            <div className='parallax-content'>
                <h1>Next Game</h1>

                <ul className='d-flex'>
                    {footballClubs.map((item, index) => {
                        return (
                            <li key={index} className='d-flex'>
                                <img src={item.image} alt='' />
                                <div>{item.stadium}</div>
                                <div>{item.name}</div>
                                <div>{item.date}</div>
                            </li>
                        );
                    })}
                </ul>
                <button>Previous</button>
                <button>Next</button>

                <div className='d-flex justify-content-around'>
                    <div>
                        <div className='ps-3'>
                            <span className='d-block fs-6 text-uppercase text-start'>
                                Trainings
                            </span>
                            <span className='fs-1 text-uppercase text-start d-block'>
                                Weekly <span className='text-primary fw-bold'>Schedule</span>
                            </span>
                        </div>

                        <div className='d-flex'>
                            <div className='p-3'>
                                <div className='d-flex fs-13 bg-primary justify-content-around text-white p-2 rounded-top-2 text-uppercase'>
                                    <div className='border-end border-white fw-bold pe-3'>
                                        Youth team
                                    </div>
                                    <div className='ps-3'>Main Field</div>
                                </div>

                                <div className='bg-white rounded-bottom'>
                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                        <span>Monday</span>
                                        <span>08PM - 09PM</span>
                                    </div>

                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13'>
                                        <div>
                                            <span className='d-block text-start text-uppercase'>
                                                Tuesday
                                            </span>
                                            <span className='fs-10'>Conditioning training</span>
                                        </div>

                                        <div>
                                            <span className='d-block'>08PM - 09PM</span>
                                            <span className='d-block fs-10 text-end'>GYM</span>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13 '>
                                        <div>
                                            <span className='d-block text-start text-uppercase'>
                                                Wednesday
                                            </span>
                                            <span className='fs-10'>Conditioning training</span>
                                        </div>

                                        <div>
                                            <span className='d-block'>08PM - 09PM</span>
                                            <span className='d-block fs-10 text-end'>GYM</span>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                        <span>Thursday</span>
                                        <span>08PM - 09PM</span>
                                    </div>

                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                        <span>Friday</span>
                                        <span>08PM - 09PM</span>
                                    </div>

                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                        <span>Saturday</span>
                                        <span>08PM - 09PM</span>
                                    </div>

                                    <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                        <span>Sunday</span>
                                        <span>08PM - 09PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex flex-column justify-content-between p-3'>
                                <div>
                                    <div className='d-flex fs-13 bg-primary justify-content-around text-white p-2 rounded-top-2 text-uppercase'>
                                        <div className='border-end border-white fw-bold pe-3'>
                                            Kids 7 - 8 yrs
                                        </div>
                                        <div className='ps-3'>Main Field</div>
                                    </div>

                                    <div className='bg-white rounded-bottom'>
                                        <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                            <span>Monday</span>
                                            <span>10am - 11am</span>
                                        </div>

                                        <div className='d-flex justify-content-between p-2 border-bottom fs-13'>
                                            <div>
                                                <span className='d-block text-start text-uppercase'>
                                                    Tuesday
                                                </span>
                                                <span className='fs-10'>Conditioning training</span>
                                            </div>

                                            <div>
                                                <span className='d-block'>08PM - 09PM</span>
                                                <span className='d-block fs-10 text-end'>GYM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className='d-flex fs-13 bg-primary justify-content-around text-white p-2 rounded-top-2 text-uppercase'>
                                        <div className='border-end border-white fw-bold pe-3'>
                                            Kids 10 - 11 yrs
                                        </div>
                                        <div className='ps-3'>Main Field</div>
                                    </div>

                                    <div className='bg-white rounded-bottom'>
                                        <div className='d-flex justify-content-between p-2 border-bottom fs-13 text-uppercase'>
                                            <span>Tuesday</span>
                                            <span>05PM - 06Pm</span>
                                        </div>

                                        <div className='d-flex justify-content-between p-2 border-bottom fs-13'>
                                            <div>
                                                <span className='d-block text-start text-uppercase'>
                                                    Wednesday
                                                </span>
                                                <span className='fs-10'>Conditioning training</span>
                                            </div>

                                            <div>
                                                <span className='d-block'>05PM - 06Pm</span>
                                                <span className='d-block fs-10 text-end'>GYM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className='d-block fs-6 text-uppercase text-start'>
                            From the clubs
                        </span>
                        <span className='fs-1 text-uppercase text-start d-block'>
                            Latest <span className='text-primary fw-bold'>News</span>
                        </span>

                        <div className='d-flex w-schedule2'>
                            <div className='p-3 rounded-top-2'>
                                <div className='position-relative'>
                                    <img
                                        src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/post_10-640x400.jpg'
                                        alt=''
                                        className='schedule-img2'
                                    />
                                    <span className='d-block position-absolute bg-white schedule-box text-center px-3'>
                                        <span className='fw-bold d-block fs-5 box-day'>13</span>
                                        <span className='text-uppercase'>Nov</span>
                                    </span>
                                </div>
                                <div className='bg-white p-3 rounded-bottom-2'>
                                    <ul className='text-start ps-0'>
                                        <span className='text-uppercase fs-10 border-end border-black pe-3'>
                                            League
                                        </span>
                                        <span className='text-uppercase fs-10 ps-3'>Masters</span>
                                    </ul>
                                    <span className='d-block fw-bold text-uppercase fs-6 text-start mb-3'>
                                        Best club in local league
                                    </span>
                                    <div className='fs-13 text-start'>
                                        Loogy tapper win off-speed run batted in designated hitter
                                        helmet save. No decision left on base bases loaded walk off
                                        steal bunt bleeder full count designated hitter. Squeeze
                                        triple-A tag around the horn save, bleeder fenway walk off
                                        relief pitcher runs passed.
                                    </div>
                                </div>
                            </div>

                            <div className='p-3 rounded-top-2'>
                                <div className='position-relative'>
                                    <img
                                        src='https://oxigeno.bold-themes.com/soccer/wp-content/uploads/sites/3/2017/10/post_09-640x400.jpg'
                                        alt=''
                                        className='schedule-img2'
                                    />
                                    <span className='d-block position-absolute bg-white schedule-box text-center px-3'>
                                        <span className='fw-bold d-block fs-5 box-day'>14</span>
                                        <span className='text-uppercase'>Nov</span>
                                    </span>
                                </div>
                                <div className='bg-white p-3 rounded-bottom-2'>
                                    <ul className='text-start ps-0'>
                                        <span className='text-uppercase fs-10 border-end border-black pe-3'>
                                            Masters
                                        </span>
                                        <span className='text-uppercase fs-10 ps-3'>Records</span>
                                    </ul>
                                    <span className='d-block fw-bold text-uppercase fs-6 text-start mb-3'>
                                        Senior team game results
                                    </span>
                                    <div className='fs-13 text-start'>
                                        Discerning the various types seems difficult to the
                                        untrained eye with the divers twisting and turning quickly
                                        before splashing into the water. Breaking each dive into
                                        simple elements not only makes performing each dive easier
                                        but also enhances your experience.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
