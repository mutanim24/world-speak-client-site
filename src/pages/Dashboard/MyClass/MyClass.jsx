import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { useState } from 'react';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] =useState([])
        useEffect(() => {
            fetch(`http://localhost:5000/classes?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyClasses(data))
        }, [])
    return (
        <div>
            {
                myClasses.map(cls => <div></div>)
            }
        </div>
    );
};

export default MyClass;