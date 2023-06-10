
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import ClassCard from '../../components/ClassCard/ClassCard';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <PageBanner
                heading='all classes'
            ></PageBanner>
            <div className='grid grid-cols-3 gap-6 my-10 px-14'>
                {
                    classes.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default AllClasses;