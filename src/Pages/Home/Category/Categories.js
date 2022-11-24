
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {


    return (
        <div className='my-40'>
            <h1 className="text-center text-5xl font-bold mb-12">Categories</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-12'>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1600x900/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2020/05/12075655/audi-r8-first-generation.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">AUDI</h2>
                        <p>Checkout used AUDI Cars.</p>
                        <div className="card-actions justify-end">
                            <Link to='/audis'><button className="btn btn-outline text-white banner-title">See Cars</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://d3s8goeblmpptu.cloudfront.net/mrp/honda/2022/accord/2022-honda-accord_landing-5.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">HONDA</h2>
                        <p>Checkout used Honda Cars.</p>
                        <div className="card-actions justify-end">
                            <Link to='/hondas'><button className="btn btn-outline text-white banner-title">See Cars</button></Link>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1.00xw:0.755xh;0,0.169xh&resize=1200:*" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">MERCEDESE-BENZ</h2>
                        <p>Checkout used Mercedese-Benz Cars.</p>
                        <div className="card-actions justify-end">
                            <Link to='/mercedes'><button className="btn btn-outline text-white banner-title">See Cars</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories;