import React from 'react';
import pageBanner from '../../assets/page banner.jpg'

const PageBanner = ({ heading }) => {
    // TODO : change banner design
    return (
        <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url("${pageBanner}")` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white capitalize">{heading}</h1>
            </div>
        </div>
    );
};

export default PageBanner;