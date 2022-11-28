import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ product1, setProduct1 }) => {
    const { name, resalePrice } = product1;
    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            location,
            name,
            displayName: user?.displayName,
            email: user?.email,
            phone,
            resalePrice
        }
        fetch('https://horse-trade-sale-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct1(null);
                    toast.success('Booking confirmed');
                }
            })

        // console.log(booking);

        // console.log(name, resalePrice, user?.displayName, user?.email, phone, location)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3' onSubmit={handleBooking}>
                        <input type="text" disabled placeholder="Type here" className="input input-bordered w-full " value={user?.displayName} />
                        <input type="text" disabled placeholder="Type here" className="input input-bordered w-full " value={user?.email} />
                        <input type="text" disabled placeholder="Type here" className="input input-bordered w-full " value={name} />
                        <input type="text" disabled placeholder="Type here" className="input input-bordered w-full " value={resalePrice} />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name='location' type="Location" placeholder="Type here" className="input input-bordered w-full " />
                        <br />
                        <input className='w-full max-w-xm btn btn-accent' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;