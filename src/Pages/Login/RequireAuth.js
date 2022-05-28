import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
const RequireAuth = ({ children }) => {

    const location = useLocation()

    const [user, loading] = useAuthState(auth);

    if (loading) {

        return <Loading></Loading>

    }

    if (!user) {

        signOut(auth);

        return <Navigate to='/signIn' state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;