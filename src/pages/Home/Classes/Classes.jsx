import { useEffect, useState } from "react";
import Class from "./Class";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    // TODO: use back-end data from mongo
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='px-14'>
            <SectionTitle
                title='Explore Our Popular Language Classes'
                subtitle='Discover the Most Enrolled Classes at WorldSpeak'
            ></SectionTitle>
            <div className='grid grid-cols-3 gap-7'>
                {
                    classes.map(cls => <Class cls={cls}></Class> )
                }
            </div>
        </div>
    );
};

export default Classes;