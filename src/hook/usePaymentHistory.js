import { useQuery } from "@tanstack/react-query";

const usePaymentHistory = () => {
    const { data: paymenthistory = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['paymenthistory'],
        queryFn: async () => {
            const res = await fetch('https://world-speak-server-site.vercel.app/payment')
            return res.json();
        }
    })
    return [paymenthistory, loading, refetch];
};

export default usePaymentHistory;