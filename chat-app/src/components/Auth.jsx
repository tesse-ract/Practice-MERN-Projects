import {auth,provider} from "../firebaseConfig.jsx";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie"
const cookies=new Cookies()

export const Auth=({setIsAuth})=>{

    const signInwithGoogle=async ()=>{
        const result=await signInWithPopup(auth,provider);
        try{
            
            console.log(result);
        cookies.set("auth-token",result.user.refreshToken);
        setIsAuth(true);
        }
        catch(err){
            console.error(err);
        }
    }
    return <div className="auth">
        <p> Sign In with Google to continue</p>
        <button onClick={signInwithGoogle}>Sign in With Google</button>
    </div>
}