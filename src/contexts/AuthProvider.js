import { useState } from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const signIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = { createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};
export default AuthProvider;