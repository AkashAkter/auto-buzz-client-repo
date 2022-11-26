
import { useForm } from "react-hook-form";
import React from 'react';
import SellerLink from '../../Shared/SellerLink/SellerLink';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleProductAdd = data => {
        fetch(`http://localhost:5000/${data.categoryName}s`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/dashboard/myProduct')
            })
    }
    return (
        <div>
            <SellerLink></SellerLink>
            <div className="hero min-h-screen mb-20" style={{ backgroundImage: `url("https://r4.wallpaperflare.com/wallpaper/590/199/595/dark-car-vehicle-nissan-wallpaper-c9f85c6066e1bf841be2db1e2c4329bc.jpg")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className='h-full flex justify-center items-center'>
                        <div className=' shadow-2xl shadow-blue-900'>
                            <h2 className='text-2xl text-white text-center'>Add New Product</h2>
                            <form onSubmit={handleSubmit(handleProductAdd)}>

                                <div className="lg:grid lg:grid-cols-3 gap-4">

                                    {/* carName */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">carName</span></label>
                                        <input type="text"
                                            {...register("carName", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* img */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">img</span></label>
                                        <input type="link"
                                            {...register("img", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* currentPrice */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">currentPrice</span></label>
                                        <input type="text"
                                            {...register("currentPrice", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* price */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">price</span></label>
                                        <input type="text"
                                            {...register("price", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* purchaseYear */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">purchaseYear</span></label>
                                        <input type="text"
                                            {...register("purchaseYear", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* condition */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">condition</span></label>
                                        <input type="text"
                                            {...register("condition", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>
                                    {/* contact */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">contact</span></label>
                                        <input type="text"
                                            {...register("contact", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* details */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">details</span></label>
                                        <input type="text"
                                            {...register("details", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* location */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">location</span></label>
                                        <input type="text"
                                            {...register("location", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>


                                    {/* used */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">used</span></label>
                                        <input type="text"
                                            {...register("used", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* sellerName */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">sellerName</span></label>
                                        <input type="text"
                                            {...register("sellerName", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                    {/* time */}
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="text-white label-text">time</span></label>
                                        <input type="date"
                                            {...register("time", { required: true })}
                                            className="text-white bg-gray-600 input input-bordered w-full max-w-xs" />
                                    </div>

                                </div>

                                {/* categoryName */}
                                <div className="form-control text-center w-full mt-4">
                                    <label className="label"> <span className="text-white label-text">categoryName?</span></label>
                                    <select
                                        {...register("categoryName", { required: true })}
                                        className="select select-primary text-white bg-gray-600">
                                        <option defaultValue='Choose' >audi</option>
                                        <option>honda</option>
                                        <option>mercedes</option>
                                    </select>
                                </div>
                                <input className='btn btn-outline bg-[#133b66] w-full mt-4 text-xl text-white' value="Register" type="submit" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;