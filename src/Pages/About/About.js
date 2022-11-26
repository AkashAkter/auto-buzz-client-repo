import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className='text-center my-12'>
            <h2 className="text-3xl">About Section</h2>
        </div>
    );
};

export default About;