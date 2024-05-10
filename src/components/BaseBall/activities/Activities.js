import React from 'react';
import './Activities.scss';

function Activities(props) {
    return (
        <div className='bg-news'>
            <h2 className='mx-5 mb-3 pt-5'>
                <span className='d-block fs-16 text-uppercase mt-5'>Ryan Sport Club</span>
                <span className='fs-48 text-uppercase'>
                    Latest <span className='text-baseball fw-bold'>News</span>
                </span>
            </h2>

            <div className='d-flex justify-content-around'>
                <div className='p-3 rounded-top-2'>
                    <div className='position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/baseball/wp-content/uploads/sites/7/2017/10/post_10-640x427.jpg'
                            alt=''
                            className='schedule-img3'
                        />
                        <span className='d-block position-absolute bg-white schedule-box text-center px-3'>
                            <span className='fw-bold d-block fs-5 box-day'>14</span>
                            <span className='text-uppercase'>Nov</span>
                        </span>
                    </div>
                    <div className='bg-white p-3 rounded-bottom-2 box-news-des'>
                        <ul className='text-start ps-0'>
                            <span className='text-uppercase fs-10 border-end border-black pe-3'>
                                Awards
                            </span>
                            <span className='text-uppercase fs-10 ps-3'>BaseBall</span>
                        </ul>
                        <span className='d-block fw-bold text-uppercase fs-6 text-start mb-3'>
                            The end for a great tournament in baseball world
                        </span>
                        <div className='fs-13 text-start'>
                            Loogy tapper win off-speed run batted in designated hitter helmet save.
                            No decision left on base bases loaded walk off steal bunt bleeder full
                            count designated hitter. Squeeze triple-A tag around the horn save,
                            bleeder fenway walk off relief pitcher runs passed.
                        </div>
                    </div>
                </div>

                <div className='p-3 rounded-top-2'>
                    <div className='position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/baseball/wp-content/uploads/sites/7/2017/10/post_09-640x427.jpg'
                            alt=''
                            className='schedule-img3'
                        />
                        <span className='d-block position-absolute bg-white schedule-box text-center px-3'>
                            <span className='fw-bold d-block fs-5 box-day'>13</span>
                            <span className='text-uppercase'>Nov</span>
                        </span>
                    </div>
                    <div className='bg-white p-3 rounded-bottom-2 box-news-des '>
                        <ul className='text-start ps-0'>
                            <span className='text-uppercase fs-10 border-end border-black pe-3'>
                                Report
                            </span>
                            <span className='text-uppercase fs-10 ps-3'>Trades</span>
                        </ul>
                        <span className='d-block fw-bold text-uppercase fs-6 text-start mb-3'>
                            Top 10 baseball players in the country
                        </span>
                        <div className='fs-13 text-start'>
                            Efficiently unleash cross-media information without cross-media value.
                            Quickly maximize timely deliverables for real-time schemas. Dramatically
                            maintain clicks-and-mortar solutions without functional solutions
                            offline to maximise the long tail. Keeping your eye.
                        </div>
                    </div>
                </div>

                <div className='p-3 rounded-top-2'>
                    <div className='position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/baseball/wp-content/uploads/sites/7/2017/10/post_07-640x427.jpg'
                            alt=''
                            className='schedule-img3'
                        />
                        <span className='d-block position-absolute bg-white schedule-box text-center px-3'>
                            <span className='fw-bold d-block fs-5 box-day'>12</span>
                            <span className='text-uppercase'>Nov</span>
                        </span>
                    </div>
                    <div className='bg-white p-3 rounded-bottom-2 box-news-des '>
                        <ul className='text-start ps-0'>
                            <span className='text-uppercase fs-10 border-end border-black pe-3'>
                                Baseball
                            </span>
                            <span className='text-uppercase fs-10 ps-3'>Records</span>
                        </ul>
                        <span className='d-block fw-bold text-uppercase fs-6 text-start mb-3'>
                            List of all baseball positions and elements
                        </span>
                        <div className='fs-13 text-start'>
                            Bring to the table win-win survival strategies to ensure proactive
                            domination. At the end of the day, going forward, a new normal that has
                            evolved from generation X is on the runway heading towards a streamlined
                            cloud solution. User generated content.
                        </div>
                    </div>
                </div>

                <div className='p-3 rounded-top-2'>
                    <div className='position-relative'>
                        <img
                            src='https://oxigeno.bold-themes.com/baseball/wp-content/uploads/sites/7/2017/10/post_08-640x427.jpg'
                            alt=''
                            className='schedule-img3'
                        />
                        <span className='d-block position-absolute bg-white schedule-box text-center px-3'>
                            <span className='fw-bold d-block fs-5 box-day'>11</span>
                            <span className='text-uppercase'>Nov</span>
                        </span>
                    </div>
                    <div className='bg-white p-3 rounded-bottom-2 box-news-des '>
                        <ul className='text-start ps-0'>
                            <span className='text-uppercase fs-10 border-end border-black pe-3'>
                                Awards
                            </span>
                            <span className='text-uppercase fs-10 ps-3'>Masters</span>
                        </ul>
                        <span className='d-block fw-bold text-uppercase fs-6 text-start mb-3'>
                            Ryan Sport Club historic triumphs in the 80’s and 90’s
                        </span>
                        <div className='fs-13 text-start'>
                            BBatting average base passed ball wild pitch second base home leather.
                            Pennant ground ball national pastime dead ball era sweep extra innings
                            grass extra innings. Backstop rope bases loaded pull bench, airmail cubs
                            relay away. Pennant loogy contact loss.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activities;
