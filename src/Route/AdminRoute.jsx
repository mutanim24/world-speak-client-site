import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, adminLoading] = useAdmin();

    if (loading || adminLoading) {
        return <div className='flex h-screen items-center justify-center'>
            <progress className="progress w-56"></progress>
        </div>
            ;
    }

    if (user && isAdmin) {
        return children;
    }
    else {
        return <Navigate to='/' state={{ from: location }}></Navigate>
    }
};

export default AdminRoute;