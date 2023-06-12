import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin = false, isLoading: adminLoading, refetch } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin, adminLoading, refetch]
};

export default useAdmin;