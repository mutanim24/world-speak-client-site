import { useQuery } from "@tanstack/react-query";

const useEnrolled = () => {
    const { data: enrolled = [], refetch } = useQuery({
        queryKey: ['enrolled'],
        queryFn: async () => {
            const res = await fetch('https://world-speak-server-site.vercel.app/enrolledclass')
            return res.json();
        }
    })
    return [enrolled, refetch];
};

export default useEnrolled;