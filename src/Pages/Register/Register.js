import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const handleRegister = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(data.role);
                toast('Account Created');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);

                    })
                    .catch(err => console.error(err))

            })
            .catch(err => console.error(err))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Save user details', data);
                navigate('/');
            })
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/dWS56p8/car.png")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7 border-2'>
                            <h2 className='text-2xl text-white text-center'>Register Here</h2>
                            <form onSubmit={handleSubmit(handleRegister)}>

                                {/* Full Name */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="text-white label-text">Full Name</span></label>
                                    <input type="text"
                                        {...register("name", { required: true })}
                                        className="text-black input input-bordered w-full max-w-xs" />
                                </div>

                                {/* Email */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="text-white label-text">Email</span></label>
                                    <input type="email"
                                        {...register("email", { required: true })}
                                        className="text-black input input-bordered w-full max-w-xs" />
                                </div>
                                {/* Password */}
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="text-white label-text">Password</span></label>
                                    <input type="password"
                                        {...register("password", { required: true })}
                                        className="text-black input input-bordered w-full max-w-xs" />
                                </div>
                                <div className="form-control w-full max-w-xs mt-4">
                                    <label className="label"> <span className="text-white label-text">Buyer or Seller?</span></label>
                                    <select
                                        {...register("role", { required: true })}
                                        className="select select-primary w-full max-w-xs text-black">
                                        <option defaultValue='Choose' >Buyer</option>
                                        <option>Seller</option>
                                    </select>
                                </div>
                                <input className='btn btn-outline bg-[#ff4605] w-full mt-4 text-xl' value="Register" type="submit" />
                            </form>
                            <p className='my-2'>Already have an account? <Link className='text-[#ff4605]' to="/login">Sign in Here</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;


