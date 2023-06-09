import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, updateUser } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        // const userData = { name: data.name, email: data.email };
                        // fetch('http://localhost:5000/users', {
                        //     method: "POST",
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(userData)
                        // })
                        //     .then(res => res.json)
                        //     .then(data => {
                        //         console.log(data)
                        //     })
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Register successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset();
                        Navigate('/')
                    })
                    .catch(err => console.log(err.message))

            })
            .catch(err => {
                console.log(err.message)
            })


    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <h1 className='text-4xl font-bold text-center my-3 mx-20'>Register Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body border">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{}[\]:;|"',.<>/?])[\w!@#$%^&*()\-=_+{}[\]:;|"',.<>/?]{8,}$/
                                })} placeholder="password" className="input input-bordered" />
                                <button
                                    type="button"
                                    className="absolute top-[433px] right-12 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {errors.password?.type === "required" && <span className='text-red-600'>This field is required</span>}
                                {errors.password?.type === "maxLength" && <span className='text-red-600'>Password should be less than 20 character</span>}
                                {errors.password?.type === "minLength" && <span className='text-red-600'>Password should be more than 6 character</span>}
                                {errors.password?.type === "pattern" && <span className='text-red-600'>Apply number, capital, small letter and special char</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-cyan-600" type="submit" value="Register" />
                            </div>
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover text-center underline text-cyan-600">Already have an account</Link>
                            </label>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;