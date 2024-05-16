import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import Header from '../components/HeaderAndFooter/Header';
import Footer from '../components/HeaderAndFooter/Footer';
import '../components/BookingStadium/BookingSport.scss';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookStadium = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [hours, setHours] = useState(1);
    const [sport, setSport] = useState('--Choose--');
    const [price, setPrice] = useState(15);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
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

    const validateForm = () => {
        const newErrors = {};

        if (!selectedDate) {
            newErrors.date = 'Please select a date';
        }
        if (!name) {
            newErrors.name = 'Please enter your name';
        }
        if (!phone) {
            newErrors.phone = 'Please enter your phone number';
        }

        if (sport === '--Choose--') {
            newErrors.sport = 'Please select a sport';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowModal(true);
        }
    };
    const handleModalClose = () => {
        setShowModal(false);
        const bookingInfo = { selectedDate, name, phone, sport, hours, price };
        navigate('/bookingHistory', { state: { bookingInfo } });
    };

    return (
        <div>
            <Header />

            <h1 className='text-center text-uppercase fw-bold mt-5 fs-60'>Booking Form</h1>
            <div className='p-5'>
                <div className='p-5 d-flex justify-content-between booking-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group my-4'>
                            <label className='text-uppercase'>Date: </label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat='dd/MM/yyyy'
                                minDate={new Date()}
                                placeholderText='Choose day'
                                className='d-block form-control ms-3'
                            />
                            {errors.date && (
                                <span className='d-block text-danger'>{errors.date}</span>
                            )}
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
                            {errors.name && <span className='text-danger'>{errors.name}</span>}
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
                            {errors.phone && <span className='text-danger'>{errors.phone}</span>}
                        </div>
                        <div className='form-group my-4'>
                            <label className='mb-3 text-uppercase'>Sports:</label>
                            <select
                                value={sport}
                                onChange={handleSportChange}
                                className='form-control'
                            >
                                <option value='Choose'>--Choose--</option>
                                <option value='Tennis'>Tennis</option>
                                <option value='Football'>Football</option>
                                <option value='Basketball'>Basketball</option>
                                <option value='Baseball'>Baseball</option>
                            </select>
                            {errors.sport && <span className='text-danger'>{errors.sport}</span>}

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
                    <div className='d-flex align-content-center'>
                        <img
                            src='https://files.jotform.com/jufs/ugurg/form_files/Blue%20Modern%20Sports%20Shopping%20Center%20Facebook%20Ad.65b3a6cc0ea832.69864443.png?md5=qU-nZwkzrNaQ_SPpQBETGA&expires=1715863346'
                            alt=''
                            className='booking-img'
                        />
                    </div>
                </div>
            </div>

            <Footer />

            <Modal
                show={showModal}
                onHide={() => {
                    setShowModal(false);
                    const bookingInfo = { selectedDate, name, phone, sport, hours, price };
                    return navigate('/bookingHistory', { state: { bookingInfo } });
                }}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <div className='mb-3'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='100'
                            height='100'
                            fill='green'
                            className='bi bi-check-circle'
                            viewBox='0 0 16 16'
                        >
                            <path d='M15.854 3.646a.5.5 0 0 0-.708-.708L6.5 11.293 2.854 7.646a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l8-8z' />
                            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
                        </svg>
                    </div>
                    <p>Your booking is successfully submitted.</p>
                    <Button variant='success' onClick={handleModalClose}>
                        OK
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default BookStadium;
