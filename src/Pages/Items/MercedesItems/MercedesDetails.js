import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MercedesDetails = () => {
    const { carName, img } = useLoaderData();
    return (
        <div className='my-20'>
            <div className='flex justify-center'>
                <img className='' src={img} alt="" />
            </div>
            <h1 className='text-center text-3xl mt-8'>{carName}</h1>
            <div>

            </div>
        </div>
    );
};

export default MercedesDetails;


