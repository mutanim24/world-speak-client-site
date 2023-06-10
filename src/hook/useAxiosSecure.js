import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: `http://localhost:5000`
})
const useAxiosSecure = () => {
    useEffect(() => {
        axiosSecure.interceptors.request.use((req) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                req.headers.Authorization = `bearer ${token}`
            }
            return req;
        })

        axiosSecure.interceptors.response.use(
            response => response,
            error => {
                if (error.response && (error?.response.status === 403 || error?.response.status === 401)) {
                    {
                        console.log(error?.response.data.error)
                    }
                }
            }
        )
    }, [])
    return axiosSecure;
};

export default useAxiosSecure;