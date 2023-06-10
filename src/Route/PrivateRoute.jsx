import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex h-screen items-center justify-center'>
            <progress className="progress w-56"></progress>
        </div>
            ;
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }
};

export default PrivateRoute;