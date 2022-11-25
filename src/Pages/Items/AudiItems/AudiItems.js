import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Items from '../Items/Items';

const AudiItems = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => fetch('http://localhost:5000/audis')
            .then(res => res.json())
    })
    return (
        <>
            <div>
                {
                    cars.map(car => <Items
                        key={car._id}
                        car={car}
                    ></Items>)
                }
            </div>


        </>
    );
};

export default AudiItems;