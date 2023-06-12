import { useQuery } from "@tanstack/react-query";

const useEnrolled = () => {
    const { data: enrolled = [], refetch } = useQuery({
        queryKey: ['enrolled'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/enrolledclass')
            return res.json();
        }
    })
    return [enrolled, refetch];
};

export default useEnrolled;