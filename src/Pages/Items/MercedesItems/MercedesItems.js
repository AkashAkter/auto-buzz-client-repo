import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingItems from '../BookingItems/BookingItems';
import Items from '../Items/Items';

const MercedesItems = () => {
    const [nameOfCar, setCarName] = useState(null);

    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/mercedess')
            .then(res => res.json())
    })

    return (
        <>
            <div>
                {
                    cars.map(car => <Items
                        key={car._id}
                        car={car}
                        setCarName={setCarName}
                    ></Items>)
                }
            </div>
            {
                nameOfCar &&
                <BookingItems
                    nameOfCar={nameOfCar}
                ></BookingItems>
            }


        </>
    );
};

export default MercedesItems; 
