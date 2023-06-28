import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolled = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: enrolled = [], refetch } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledclass?email=${user?.email}`)
            return res.data;
        }
    })
    return [enrolled, refetch];
};
export default useEnrolled;