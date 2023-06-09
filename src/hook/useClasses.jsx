import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
// TODO everything in this hook
export const useClasses = () => {
    const [classes, setClasses] = useState([])
    // const {data: classes = [], isLoading: loading, refetch } = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: () => {
    //         fetch('http://localhost:5000/classes')
    //         .then(res => res.json())
    //     }
    // })
    fetch('http://localhost:5000/classes')
    .then(res => res.json())
    .then(data => setClasses(data))
}
