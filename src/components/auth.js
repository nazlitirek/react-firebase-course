import {auth, googleAuthProvider} from "../config/firebase";
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import { useState } from "react";


export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   

    const signIn = async () => {
        
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            
        }catch(err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleAuthProvider);
        
        } catch (err) {
          console.error(err);
        }
      };

    const signOut = async () => {
        
        try {
            await signOut(auth);
        }catch(err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input 
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>sign in</button>
            <button onClick={signInWithGoogle}>sign in with google</button>
            <button onClick={signOut}>sign out</button>
            
        </div>
    )
};