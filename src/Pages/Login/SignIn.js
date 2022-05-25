import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let signInError;
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (googleLoading) {
        return <Loading></Loading>
    }
    if (googleUser) {
        navigate(from, { replace: true })
    }
    if (googleError) {
        signInError = <p className='text-red-600'><small>{googleError?.message}</small></p>
    }
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Please Sign IN</h2>
                    <div class="card-actions justify-end">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("firstName", { required: true })} />
                            {errors.firstName?.type === 'required' && "First name is required"}

                            <input {...register("lastName", { required: true })} />
                            {errors.lastName && "Last name is required"}

                            <input type="submit" />
                        </form>
                        <button class="btn btn-primary">Sign In</button>
                        <button onClick={() => signInWithGoogle()} className="btn btn-active btn-secondary">Google Login</button>

                    </div>
                </div>
            </div>
            {signInError}
        </div>
    );
};

export default SignIn;