
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';

const Login = () => {
    useTitle('Login');
    const { signIn, providerLogin } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [loginUSerEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUSerEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(err => console.error(err))

    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                const name = res.user.displayName;
                const email = res.user.email;
                const role = 'Buyer';
                // console.log(res.user.email);
                saveUser(name, email, role);
            })
            .catch(e => console.error(e))
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://auto-buzz-server-site.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setLoginUserEmail(email);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/dWS56p8/car.png")` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className='h-[800px] flex justify-center items-center'>
                        <div className='w-96 p-7 border  shadow-2xl shadow-indigo-900'>
                            <h2 className='text-2xl text-white text-center'>Login</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>

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
                                <input className='btn btn-outline bg-[#ff4605] w-full mt-4 text-xl' value="Login" type="submit" />
                            </form>
                            <p>New in Auto Buzz <Link className='text-[#ff4605]' to="/register">Create new Account</Link></p>
                            <div className="divider">OR</div>
                            <button onClick={handleGoogleSignIn} className='btn btn-outline hover:bg-[#ff4605] text-white w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;