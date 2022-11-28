import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import BookingItems from '../BookingItems/BookingItems';
import Items from '../Items/Items';

const MercedesItems = () => {
    const { user } = useContext(AuthContext);
    const [nameOfCar, setCarName] = useState(null);

    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/mercedess')
            .then(res => res.json())
    });
    const { data: users = {} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const role = users[0]?.role;

    return (
        <>
            <div className='border p-20'>

                {
                    cars.map(car => <Items
                        key={car._id}
                        car={car}
                        setCarName={setCarName}
                        users={role}
                    ></Items>)
                }
            </div>

            <div>
                {
                    nameOfCar &&
                    <BookingItems
                        nameOfCar={nameOfCar}
                    ></BookingItems>
                }
            </div>


        </>
    );
};

export default MercedesItems; 
