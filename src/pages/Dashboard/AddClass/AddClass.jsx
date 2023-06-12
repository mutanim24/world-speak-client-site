import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const AddClass = () => {
    const axiosSecure = useAxiosSecure()

    const { user } = useContext(AuthContext);

    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const class_name = form.class_name.value;
        const class_image = form.class_image.value;
        const instructor_name = form.instructor_name.value;
        const instructor_email = form.instructor_email.value;
        const instructor_image = form.instructor_image.value;
        const available_seats = form.seats.value;
        const price = form.price.value;
        const class_status = 'pending';
        const enrolled_class = 0;

        const newClass = { class_name, class_image, instructor_name, instructor_email, instructor_image, available_seats, price, class_status, enrolled_class, feedback: '' };

        axiosSecure.post('/classes', newClass)
            .then(data => {
                console.log(data)
                if (data.data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='w-full'>
            <PageBanner
                heading='Add your class'
            ></PageBanner>
            <form onSubmit={handleAddClass} className='m-6 md:m-14 p-8 rounded shadow-lg'>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input required name='class_name' type="text" placeholder="class name" className="input input-bordered input-info w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Class Image URL</span>
                        </label>
                        <input required name='class_image' type="text" placeholder="class image URL" className="input input-bordered input-info w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name</span>
                        </label>
                        <input required name='instructor_name' type="text" readOnly defaultValue={user?.displayName} placeholder="instructor name" className="input input-bordered input-info w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input required name='instructor_email' readOnly type="email" defaultValue={user?.email} placeholder="instructor email" className="input input-bordered input-info w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor imageURL</span>
                        </label>
                        <input required name='instructor_image' type="text" placeholder="instructor imageURL" className="input input-bordered input-info w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats</span>
                        </label>
                        <input required name='seats' type="number" placeholder="available seats" className="input input-bordered input-info w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input required name='price' type="number" placeholder="price" className="input input-bordered input-info w-full" />
                    </div>
                </div>

                <input type="submit" className='btn mt-6 text-white bg-cyan-600 w-full' value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;