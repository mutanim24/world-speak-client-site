import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user)
                if (result?.user.email) {
                    const userData = { name: result.user.displayName, email: result.user.email, image: result.user?.photoURL, role: 'student' };
                    fetch('http://localhost:5000/users', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                        .then(res => res.json)
                        .then(data => {
                            console.log(data)
                        })
                        navigate('/')
                }
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className='text-center w-full'>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn hover:bg-cyan-600 btn-outline mx-auto">
                <FcGoogle></FcGoogle> Login with google
            </button>

        </div>
    );
};

export default SocialLogin;