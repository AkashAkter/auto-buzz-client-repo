import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { carName, currentPrice } = booking;
    if (navigation.state === "loading") {
        return
    }
    // console.log(booking);
    return (
        <div>
            <h3 className="text-3xl">Payment for {carName}</h3>
            <p className="text-xl">Please pay <strong>${currentPrice}</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;