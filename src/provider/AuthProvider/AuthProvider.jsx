import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser?.email) {
                fetch('https://world-speak-server-site.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({email: currentUser?.email})
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access_token', data.token)
                        setUser(currentUser)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access_token')
                setUser(null)
                setLoading(false)
            }

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = { user, loading, createUser, updateUser, signIn, googleLogin, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;