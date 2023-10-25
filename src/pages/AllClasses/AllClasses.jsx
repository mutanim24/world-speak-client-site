
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import ClassCard from '../../components/ClassCard/ClassCard';
import useData from '../../hook/useData';

const AllClasses = () => {

    const [data, , refetch] = useData();

    // const [classes, setClasses] = useState([]);
    // useEffect(() => {
    //     fetch('https://world-speak-server-site.vercel.app/classes')
    //         .then(res => res.json())
    //         .then(data => setClasses(data))
    // }, [])
    return (
        <div>
            <PageBanner
                heading='all classes'
            ></PageBanner>
            <div className='grid md:grid-cols-3 gap-6 my-10 px-6 md:px-14'>
                {
                    data.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;