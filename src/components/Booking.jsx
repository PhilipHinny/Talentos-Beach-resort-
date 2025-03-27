import React, { useState } from 'react';
import '../styles/Booking.css'; 

const Booking = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);

    const handleBooking = () => {
        const bookingDetails = `Booking confirmed!\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}`;
        alert("Booking confirmed! Thank you for booking with us. We will contact you shortly to confirm your booking details.");

        // Simulate sending an email
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        const mailtoLink = `mailto:hinnyp5@gmail.com?subject=Booking Details&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n${bookingDetails}`
        )}`;
        window.location.href = mailtoLink;

        window.location.reload();
    };

    return (
        <div className="booking-popup">
            <h2>Book Your Stay</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                />
            </div>

            <div className="booking-dates">
            <div className="form-group">
                <label htmlFor="checkIn">Check-in Date</label>
                <input
                    type="date"
                    id="checkIn"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="checkOut">Check-out Date</label>
                <input
                    type="date"
                    id="checkOut"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                />
            </div>
            </div>

            <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <input
                    type="number"
                    id="guests"
                    min="1"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>
            <button className="booking-button" onClick={handleBooking}>
                Book Now
            </button>
        </div>
    );
};

export default Booking;