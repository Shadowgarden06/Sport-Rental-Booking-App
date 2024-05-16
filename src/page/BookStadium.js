import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';
import '../components/BookingStadium/BookingSport.scss';

const BookStadium = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [hours, setHours] = useState(1);
    const [sport, setSport] = useState('--Choose--');
    const [price, setPrice] = useState(15);
    const navigate = useNavigate();

    useEffect(() => {
        let pricePerHour;
        switch (sport) {
            case 'Tennis':
                pricePerHour = 15;
                break;
            case 'Football':
                pricePerHour = 30;
                break;
            case 'Basketball':
                pricePerHour = 35;
                break;
            case 'Baseball':
                pricePerHour = 45;
                break;
            default:
                pricePerHour = 0;
                break;
        }
        setPrice(hours * pricePerHour);
    }, [hours, sport]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleHourIncrement = () => {
        setHours((prevHours) => prevHours + 0.5);
    };

    const handleHourDecrement = () => {
        if (hours > 0.5) {
            setHours((prevHours) => prevHours - 0.5);
        }
    };

    const handleSportChange = (e) => {
        setSport(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Thông tin đặt sân:', { date: selectedDate, name, phone, sport, hours, price });
        const bookingInfo = { selectedDate, name, phone, sport, hours, price };
        navigate('/bookingHistory', { state: { bookingInfo } });
    };

    return (
        <div>
            <Header />
            <h1 className='text-center text-uppercase fw-bold mt-5 fs-60'>Booking</h1>
            <div className='p-5'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group my-4'>
                        <label className='text-uppercase'>Date: </label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date()}
                            placeholderText='Choose day'
                            className='form-control ms-3'
                        />
                    </div>
                    <div className='form-group'>
                        <label className='mb-3 text-uppercase'>Name:</label>
                        <input
                            type='text'
                            value={name}
                            onChange={handleNameChange}
                            className='form-control'
                            placeholder='Eg: Nguyen Van A'
                        />
                    </div>
                    <div className='form-group my-4'>
                        <label className='mb-3 text-uppercase'>Phone Number:</label>
                        <input
                            type='text'
                            value={phone}
                            onChange={handlePhoneChange}
                            className='form-control'
                            placeholder='Eg: 0912345629'
                        />
                    </div>
                    <div className='form-group my-4'>
                        <label className='mb-3 text-uppercase'>Sports:</label>
                        <select value={sport} onChange={handleSportChange} className='form-control'>
                            <option value='Choose'>--Choose--</option>
                            <option value='Tennis'>Tennis</option>
                            <option value='Football'>Football</option>
                            <option value='Basketball'>Basketball</option>
                            <option value='Baseball'>Baseball</option>
                        </select>

                        <div className='form-group my-4'>
                            <label className='mb-3 text-uppercase'>Rental hours:</label>
                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <button
                                        type='button'
                                        className='btn btn-outline-secondary'
                                        onClick={handleHourDecrement}
                                    >
                                        -
                                    </button>
                                </div>
                                <input
                                    type='text'
                                    value={hours}
                                    readOnly
                                    className='form-control text-center'
                                />
                                <div className='input-group-append'>
                                    <button
                                        type='button'
                                        className='btn btn-outline-secondary'
                                        onClick={handleHourIncrement}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='form-group my-4'>
                            <label className='mb-3 text-uppercase'>Price(s):</label>
                            <input
                                type='text'
                                value={`$${price}`}
                                readOnly
                                className='form-control'
                            />
                        </div>
                    </div>
                    <div className='form-group my-4'>
                        <label className='mb-3 text-uppercase'>Address:</label>
                        <input
                            type='text'
                            value='Sân Phú Thọ, Thành phố Hồ Chí Minh'
                            readOnly
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-primary text-uppercase'>
                        Book now
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BookStadium;
