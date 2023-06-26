import React from 'react';

const InstructorCard = ({ teacher }) => {
    return (
        <div className="overflow-hidden rounded bg-transparent shadow-md shadow-slate-200">
            {/*  <!-- Image --> */}
            <figure>
                <img
                    src={teacher.instructor_image}
                    alt="card image"
                    className="aspect-video w-full"
                />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
                <header className="mb-4">
                    <h3 className="text-xl font-medium">
                        {teacher.instructor_name}
                    </h3>
                    <p className=" text-slate-400">{teacher.instructor_email}</p>
                </header>
                {/* <p>Available seats: {cls.available_seats}</p> */}
            </div>
            {/*  <!-- Action base sized basic button --> */}
            <div className="flex justify-end p-6 pt-0">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-cyan-600 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-cyan-800">
                    <span>See Classes!</span>
                </button>
            </div>
        </div>
    );
};

export default InstructorCard;