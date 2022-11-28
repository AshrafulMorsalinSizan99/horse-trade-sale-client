import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    // if (token) {
    //     navigate('/');
    // }
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setLoginUserEmail(data.email);
                navigate('/');

            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message);
            });
        // .then(res => {
        //     const user = res.user;


        //     const currentUser = {
        //         email: user?.email
        //     }
        //     console.log(currentUser);
        //     fetch('http://localhost:5000/jwt', {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(currentUser)
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data);
        //             localStorage.setItem('photo-token', data.token);
        //         })
        //     // form.reset();
        //     navigate(from, { replace: true })
        // })
        // .catch(err => console.error(err))
    }
    const handleGoogleSignIn = () => {
        providerLogin(provider)
            // .then(res => {
            //     const user = res.user;
            //     console.log(user);
            // })
            .then(res => {
                const user = res.user;

                const currentUser = {
                    email: user?.email
                }
                console.log(currentUser);
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="text" {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" {...register("password", { required: "Password is required" })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>

                        </label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full' value="login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>


                </form>
                <p>New to Horse Trade Sale? <Link className='text-secondary' to='/signup'> Create an account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;