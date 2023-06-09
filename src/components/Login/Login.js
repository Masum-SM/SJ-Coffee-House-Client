
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {login,googleLoing} = useContext(AuthContext);
    const [loginError, setLoginError] = useState(' ');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = data =>{
        setLoginError(' ');
        googleLoing()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message)
        });
    }

    const handleLogin = data => {
        console.log(data)
        setLoginError(' ');
        login(data.email,data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message)
        });
        // axios.post('/auth', data)
        //     .then(res => {
        //         console.log(res.data,
        //             res.data.token)
        //         window.open(`http://localhost:3000?token=${res.data.token}`)
        //     }).then(err => {
        //         console.log(err);
        //         alert(err.message)
        //     })
    }
    return (
        <div>

            <div className='h-[800px] flex justify-center  items-center login_full px-4'>
                <div className='w-96 p-7 login_card bg-white drop-shadow-xl'>
                    <h2 className='text-4xl text-center login_text mb-4'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs mb-4">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email"
                                {...register("email", { required: "Email Address is required" })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer." }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}

                            <label className="label"><span className="label-text mt-2">Forget Password?</span></label>
                        </div>
                        <div>
                            {loginError && <p className='text-red-600' >{loginError}</p> } 
                        </div>

                        <input className='btn log_btn w-full my-8' value="Login" type="submit" />
                    </form>
                    <p>New to SJ Coffee House <Link className='text-primary' to="/register">Create a new account.</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full' onClick={handleGoogleLogin}>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;