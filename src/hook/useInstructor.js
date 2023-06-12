import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: isInstructor = false, isLoading: instructorLoading, refetch } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor;
        }
    })
    return [isInstructor, instructorLoading, refetch]
};

export default useInstructor;