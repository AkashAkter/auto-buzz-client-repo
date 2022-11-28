import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className='text-center my-[300px]'>
            <h2 className="text-6xl shadow-2xl">About Section</h2>
        </div>
    );
};

export default About;