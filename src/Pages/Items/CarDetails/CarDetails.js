import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const CarDetails = () => {
    const { carName, img, currentPrice } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const carName = form.carName.value;
        const phone = form.phone.value;
        const address = form.address.value;

        const booking = {
            name,
            email,
            carName,
            phone,
            address
        }
        console.log(booking);
        form.reset();
        toast.success('Booking confirmed');
    }

    return (
        <div className='my-20'>
            <div className='flex justify-center'>
                <img className='' src={img} alt="" />
            </div>
            <h1 className='text-center text-3xl mt-8'>{carName}</h1>
            <div>
                <button className='btn btn-outline'>Book Now</button>

                <label htmlFor="booking-modal" className="btn">open modal</label>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='text-center uppercase text-2xl my-4'>Add your info</h1>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>

                            <input name='name' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" disabled />

                            <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full" disabled />

                            <input name='carName' type="text" defaultValue={carName} placeholder="Car Name" className="input input-bordered w-full " disabled />

                            <input name='carPrice' type="text" defaultValue={currentPrice} placeholder='Car Price' className="input input-bordered w-full " disabled />

                            <input name='phone' type="tel" placeholder="Phone Number" className="input input-bordered w-full" />

                            <input name='address' type="text" placeholder="Meeting Address" className="input input-bordered w-full" />

                            <input className='btn btn-accent w-full' type="submit" value="Submit" />

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarDetails;
