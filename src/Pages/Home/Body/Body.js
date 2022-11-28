import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { SlNotebook } from 'react-icons/sl';
import { TbNews } from 'react-icons/tb';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { GiAutoRepair } from 'react-icons/gi';
import { MdSell } from 'react-icons/md';

const Body = () => {
    return (
        <div className='my-36'>
            <section className='lg:mx-40 md:mx-20 mx-8'>
                <div className='text-center my-8'>
                    <h1 className='text-4xl font-extrabold'>All the ways to find car chemistry</h1>
                    <p>We're your one-stop shop for buying and selling your car. Get matched to your perfect car, or sell one swiftly.</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-4'>

                    <div className='lg:flex md:flex shadow-2xl shadow-indigo-900/80 border p-8'>
                        <div className='text-[#ff4605] mr-4'>
                            <AiFillCar className='w-16 h-16'></AiFillCar>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-4 font-semibold'>Shop</h3>
                            <p className='text-justify'>Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.</p>
                        </div>
                    </div>

                    <div className='lg:flex md:flex shadow-2xl shadow-indigo-900/80 border p-8'>
                        <div className='text-[#ff4605] mr-4'>
                            <SlNotebook className='w-16 h-16'></SlNotebook>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-4 font-semibold'>Research</h3>
                            <p className='text-justify'>View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let you hear the good and the bad from current car owners.</p>
                        </div>
                    </div>

                    <div className='lg:flex md:flex shadow-2xl shadow-indigo-900/80 border p-8'>
                        <div className='text-[#ff4605] mr-4'>
                            <TbNews className='w-16 h-16'></TbNews>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-4 font-semibold'>News</h3>
                            <p className='text-justify'>Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.</p>
                        </div>
                    </div>

                    <div className='lg:flex md:flex shadow-2xl shadow-indigo-900/80 border p-8'>
                        <div className='text-[#ff4605] mr-4'>
                            <MdSell className='w-16 h-16'></MdSell>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-4 font-semibold'>Sell</h3>
                            <p className='text-justify'>Check out our free, secure methods for selling your car. You can either sell directly to a private-party shopper or get an Instant Offer from a dealership. Choose the option that's right for you!</p>
                        </div>
                    </div>

                    <div className='lg:flex md:flex shadow-2xl shadow-indigo-900/80 border p-8'>
                        <div className='text-[#ff4605] mr-4'>
                            <GiAutoRepair className='w-16 h-16'></GiAutoRepair>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-4 font-semibold'>Service & Repair</h3>
                            <p className='text-justify'>Watch do-it-yourself tutorials or find local repair options.</p>
                        </div>
                    </div>

                    <div className='lg:flex md:flex shadow-2xl shadow-indigo-900/80 border p-8'>
                        <div className='text-[#ff4605] mr-4'>
                            <AiFillSafetyCertificate className='w-16 h-16'></AiFillSafetyCertificate>
                        </div>
                        <div>
                            <h3 className='text-2xl mb-4 font-semibold'>Certified Pre-Owned</h3>
                            <p className='text-justify'>Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.</p>
                        </div>
                    </div>

                </div>
            </section>


            <section className='lg:mx-40 md:mx-20 mx-8 mt-40'>
                <div className='text-center my-8'>
                    <h1 className='text-4xl font-extrabold'>Control Your Car-Buying Experience</h1>
                    <p>At TrueCar, you're in charge of the process from start to finish. Here's how.                    </p>
                </div>


                <div className="hero" style={{ backgroundImage: `url("https://timelinecovers.pro/facebook-cover/download/belaya_lamborghini_aventador-facebook-cover.jpg")` }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="lg:flex py-8">
                            <div>
                                <h1 className=" mx-20 text-2xl font-bold banner-title">Build Your Deal With Confidence</h1>
                            </div>
                            <div>
                                <p className="mb-5 banner-title">Get a price offer from a dealer online, then customize your deal to fit your needs.</p>
                                <button className="btn btn-outline text-white banner-title">Button</button>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="hero my-12" style={{ backgroundImage: `url("https://i.ibb.co/XVQnHt1/cars.png")` }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="lg:flex py-8">
                            <div>
                                <h1 className=" mx-20 text-2xl font-bold banner-title">Choose From Close to 790,000 Used Cars</h1>
                            </div>
                            <div>
                                <p className="mb-5 banner-title">Browse our extensive selection of pre-owned vehicles, and use our price ratings to know a great deal when you see one.</p>
                                <button className="btn btn-outline text-white banner-title">Button</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="hero" style={{ backgroundImage: `url("https://timelinecovers.pro/facebook-cover/download/chained-car-facebook-cover.jpg")` }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="lg:flex py-8">
                            <div>
                                <h1 className=" mx-20 text-2xl font-bold banner-title">Get a Trade-in Offer You Can Use Today</h1>
                            </div>
                            <div>
                                <p className="mb-5 banner-title">Value your car, get a cash offer in minutes, then cash out or trade in.</p>
                                <button className="btn btn-outline text-white banner-title">Button</button>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
};

export default Body;