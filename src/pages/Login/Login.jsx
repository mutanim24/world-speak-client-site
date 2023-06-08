import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                // console.log(result.user)
                // updateUser(data.name, data.photoURL)
                //     .then(() => {
                //         const userData = { name: data.name, email: data.email };
                //         fetch('http://localhost:5000/users', {
                //             method: "POST",
                //             headers: {
                //                 'content-type': 'application/json'
                //             },
                //             body: JSON.stringify(userData)
                //         })
                //             .then(res => res.json)
                //             .then(data => {
                //                 console.log(data)
                //             })
                //         Swal.fire({
                //             position: 'center',
                //             icon: 'success',
                //             title: 'Register successfully',
                //             showConfirmButton: false,
                //             timer: 1500
                //         })
                //         reset();
                //         Navigate('/')
                //     })
                //     .catch(err => console.log(err.message))

            })
            .catch(err => {
                console.log(err.message)
            })


    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-4xl font-bold text-center my-3 mx-20'>Login Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body border">
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
                                <input type={showPassword ? "text" : "password"} {...register("password",)} placeholder="password" className="input input-bordered" />
                                <button
                                    type="button"
                                    className="absolute top-[250px] right-12 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {errors.password?.type === "required" && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn text-white bg-cyan-600" type="submit" value="Login" />
                            </div>
                            <label className="label">
                                <Link to='/signup' className="label-text-alt link link-hover text-center">new at WorldSpeak</Link>
                            </label>
                            {/* todo social */}
                        </form>
                    </div>
                    <div className="text-center">
                        {/* <img src={authenticationImg} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;