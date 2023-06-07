import { FcGoogle } from 'react-icons/fc';
const SocialLogin = () => {
    const handleGoogleLogin = () => {
        
    }
    return (
        <div className='text-center w-full'>
            <div className="divider"></div>
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline mx-auto">
                <FcGoogle></FcGoogle>
            </button>

        </div>
    );
};

export default SocialLogin;