import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Items from '../Items/Items';

const HondaItems = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/hondas')
            .then(res => res.json())
    })

    return (
        <div>
            {
                cars.map(car => <Items
                    key={car._id}
                    car={car}
                ></Items>)
            }
        </div>
    );
};

export default HondaItems;