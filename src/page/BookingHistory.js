import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingHistory = () => {
    const location = useLocation();
    const bookingInfo = location.state?.bookingInfo;

    return (
        <div>
            <h2>Lịch sử đặt sân</h2>
            {bookingInfo && (
                <div>
                    <p>
                        Ngày:
                        {bookingInfo.selectedDate
                            ? bookingInfo.selectedDate.toLocaleDateString()
                            : ''}
                    </p>
                    <p>Tên: {bookingInfo.name}</p>
                    <p>Số điện thoại: {bookingInfo.phone}</p>
                    <p>Môn Thể Thao: {bookingInfo.sport}</p>
                    <p>Số giờ đặt: {bookingInfo.hours}</p>
                    <p>Giá: ${bookingInfo.price}</p>
                </div>
            )}
        </div>
    );
};

export default BookingHistory;
