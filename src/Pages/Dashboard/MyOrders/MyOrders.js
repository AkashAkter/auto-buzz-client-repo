import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const MyOrders = () => {

    useTitle('Dashboard - orders');
    const { user } = useContext(AuthContext);

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mb-[500px] mt-10'>
            <h3 className="text-4xl text-center banner-title">My Orders</h3>

            <div className="overflow-x-auto border mt-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td><img className='w-20' src={booking.img} alt="" /></td>
                                <td>{booking.carName}</td>
                                <td>${booking.currentPrice}</td>
                                <td>
                                    {
                                        booking.currentPrice && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button className='btn'>PAY NOW</button>
                                        </Link>
                                    }
                                    {
                                        booking.currentPrice && booking.paid && <span className='text-2xl text-orange-700 font-bold'>Paid</span>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;