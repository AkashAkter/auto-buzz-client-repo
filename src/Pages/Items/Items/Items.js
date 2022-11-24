import React from 'react';
import { Link } from 'react-router-dom';

const Items = ({ car }) => {
    return (

        <div className="hero w-fit border border-lg">
            <div className="hero-content flex-col lg:flex-row">
                <img src={car.img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold"> {car.carName}</h1>
                    <div className="py-6 text-xl">
                        <p>Vehicle Condition : {car.condition}</p>
                        <p>Price : ${car.currentPrice}</p>
                    </div>
                    <Link to={`/${car.categoryName}s/${car._id}`}> <button className="btn btn-outline hover:bg-[#ff4605] banner-title">More Details</button></Link>
                </div>
            </div>
        </div>



    );
};

export default Items;