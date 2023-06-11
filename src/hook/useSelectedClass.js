import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useSelectedClass = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const {data: selectedClass = [], refetch} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/select-class?email=${user?.email}`)
            return res.data;
        } 
    })
    return [selectedClass, refetch]
};

export default useSelectedClass;