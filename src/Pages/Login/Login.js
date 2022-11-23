import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/dWS56p8/car.png")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7 border-2'>
                            <h2 className='text-2xl text-white text-center'>Login</h2>
                            <form>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="text-white label-text">Email</span></label>
                                    <input type="text"
                                        className="text-black input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="text-white label-text">Password</span></label>
                                    <input type="password"
                                        className="text-black input input-bordered w-full max-w-xs" />
                                </div>
                                <input className='btn btn-outline bg-[#ff4605] w-full mt-4 text-xl' value="Login" type="submit" />

                            </form>
                            <p>New in Auto Buzz <Link className='text-[#ff4605]' to="/register">Create new Account</Link></p>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline hover:bg-[#ff4605] text-white w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;