import React from 'react';
import './TimeTable.scss';
function TimeTable(props) {
    return (
        <div className='parallax8' id='parallax8'>
            <div className='parallax-bg8'></div>
            <div className='parallax-content8'>
                <div className='d-flex justify-content-around'>
                    <div className='timetable-box'>
                        <div className=''>
                            <span className='d-block fs-5 text-uppercase text-start'>
                                From the Club
                            </span>
                            <span className='fs-65 text-uppercase text-start d-block'>
                                Club <span className='text-redbasket fw-bold'>TimeTable</span>
                            </span>
                        </div>

                        <div>
                            <div className='text-start fs-5 my-3'>
                                All awards recognize the players with the highest percentage of
                                overall improvement in all events.
                            </div>

                            <div className='text-start fs-13'>
                                Leverage agile frameworks to provide a robust synopsis for high
                                level overviews. Iterative approaches to corporate strategy foster
                                collaborative thinking to further the overall.
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex'>
                            <div className='p-3'>
                                <div className='d-flex fs-13 bg-redbasket justify-content-around text-white p-2 rounded-top-2 text-uppercase'>
                                    <div className='border-end border-white fw-bold pe-3'>
                                        Senior team
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
                                    <div className='d-flex fs-13 bg-redbasket justify-content-around text-white p-2 rounded-top-2 text-uppercase'>
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
                                    <div className='d-flex fs-13 bg-redbasket justify-content-around text-white p-2 rounded-top-2 text-uppercase'>
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
                </div>
            </div>
        </div>
    );
}

export default TimeTable;
