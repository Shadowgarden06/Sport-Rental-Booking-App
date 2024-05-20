import React, { useEffect, useState } from 'react';
import Header from '../../components/HeaderAndFooter/Header';
import Footer from '../../components/HeaderAndFooter/Footer';
import './Historyy.css';
import Login from '../SignUp&&Login/Login';
import { useLocation } from 'react-router-dom';

function Historyyy(props) {
    let { Infor, setInfor, showAvatar, setShowAvatar, saveInfo } = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const bookingInfo = location.state?.bookingInfo;

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
            <div className='w-100 d-flex justify-content-center align-items-center text-center mt-5'>
                <h1 className='text-uppercase fw-bold text-center'>Membership</h1>
            </div>
            <div className='col-md-6'>
                <label htmlFor='inputName' className='form-label customForm'>
                    Name:{' '}
                </label>
                <input
                    type='text'
                    className='form-control customForm'
                    id='inputName'
                    disabled
                    value={`${Infor[Infor.length - 1].fname || '--'} ${
                        Infor[Infor.length - 1].lname || ''
                    }`}
                />
            </div>
            <div className='col-md-6'>
                <label for='inputAddess' className='form-label customForm'>
                    Address:{' '}
                </label>
                <input
                    type='text'
                    className='form-control customForm'
                    id='inputAddess'
                    disabled
                    value={Infor[Infor.length - 1].address || '--'}
                />
            </div>
            <div className='col-md-6'>
                <label htmlFor='inputMail' className='form-label customForm'>
                    Email:{' '}
                </label>
                <input
                    type='text'
                    className='form-control customForm'
                    id='inputMail'
                    disabled
                    value={Infor[Infor.length - 1].mail || '--'}
                />
            </div>
            <div className='col-md-6'>
                <label for='inputNumber' className='form-label customForm'>
                    Number:{' '}
                </label>
                <input
                    type='text'
                    className='form-control customForm'
                    id='inputNumber'
                    disabled
                    value={'0' + (Infor[Infor.length - 1].number || '')}
                />
            </div>
            <div className='col-md-6'>
                <label for='inputDate' className='form-label customForm'>
                    Signing Date::{' '}
                </label>
                <input
                    type='text'
                    className='form-control customForm'
                    id='inputDate'
                    disabled
                    value={Infor[Infor.length - 1].date || new Date().toDateString()}
                />
            </div>

            {/* Booking History */}
            <div className='d-flex justify-content-center align-items-center'>
                <div className='booking-history1 my-5'>
                    <h2 className='text-center mb-4'>Booking History</h2>
                    {bookingInfo ? (
                        <div className='card shadow-sm p-4'>
                            <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Date:</strong>{' '}
                                        {bookingInfo.selectedDate
                                            ? new Date(
                                                  bookingInfo.selectedDate
                                              ).toLocaleDateString()
                                            : ''}
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Name:</strong> {bookingInfo.name}
                                    </p>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Phone Number:</strong> {bookingInfo.phone}
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Sport:</strong> {bookingInfo.sport}
                                    </p>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Hour(s):</strong> {bookingInfo.hours}
                                    </p>
                                </div>
                                <div className='col-md-6'>
                                    <p>
                                        <strong>Price:</strong> ${bookingInfo.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='alert alert-warning text-center' role='alert'>
                            Không có thông tin đặt sân nào.
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Historyyy;
