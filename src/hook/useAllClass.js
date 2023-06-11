import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAllClass = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: allClass = [], refetch } = useQuery({
        queryKey: ['allClass'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes`)
            return res.data;
        }
    })
    return [allClass, refetch]
};

export default useAllClass;