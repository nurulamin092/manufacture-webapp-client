import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let signInError;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (user || googleUser) {
        navigate(from, { replace: true })
    }
    if (error || googleError) {
        signInError = <p className='text-red-600'>
            <small>
                {error?.message || googleError?.message}
            </small>
        </p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Sign IN</h2>
                    <div class="card-actions justify-end">
                        <div class="flex flex-col w-full border-opacity-50">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Your Email"
                                        class="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label class="label">
                                        {
                                            errors.email?.type === 'required' &&
                                            <span className='label-text-alt text-red-500'>
                                                {errors.email.message}
                                            </span>
                                        }
                                        {
                                            errors.email?.type === 'pattern' &&
                                            <span className='label-text-alt text-red-500'>
                                                {errors.email.message}
                                            </span>
                                        }

                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>
                                <input />
                                {signInError}
                                <input className='btn  w-full max-w-xs' type="submit" value='Login' />
                            </form>
                            <p>New to Bicycle Manufacture? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                            <div class="divider">OR</div>
                            <button onClick={() => signInWithGoogle()} className="btn btn-active btn-secondary">Google Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;