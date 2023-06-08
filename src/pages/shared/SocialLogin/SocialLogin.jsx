import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
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