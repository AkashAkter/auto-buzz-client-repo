import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Items from '../Items/Items';

const MercedesItems = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/mercedess')
            .then(res => res.json())
    })

    return (
        <div>
            {/* <h1>{cars[0].categoryName}</h1> */}
            {
                cars.map(car => <Items
                    key={car._id}
                    car={car}
                ></Items>)
            }

        </div>
    );
};

export default MercedesItems; 
