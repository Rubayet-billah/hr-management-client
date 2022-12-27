import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ form: location }} replace={true} />
};

export default AdminRoute;