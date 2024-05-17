import React from 'react';
import './RentalPrice.scss';
import { useNavigate } from 'react-router-dom';

function RentalPrice(props) {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate('/bookstadium', {
            state: { sport: 'Baseball', selectedDate: new Date().toISOString() }
        });
    };

    return (
        <div className='box-price p-5'>
            <div>
                <h1 className='text-white text-uppercase fw-bold'>BaseBall Court Rental Rate</h1>
                <table class='facilities-table text-white w-50'>
                    <thead>
                        <tr>
                            <th>Facility</th>
                            <th>Duration</th>
                            <th className='text-center'>Standard Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Outdoor</td>
                            <td>Per Hour</td>
                            <td className='text-center'>$45</td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-white'>
                    *Applicable for VietNam Citizens & Permanent Residents (Valid photo ID
                    required).
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn btn-info' onClick={handleBookNow}>
                    Book now
                </button>
            </div>
        </div>
    );
}

export default RentalPrice;
