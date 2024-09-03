import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
        checkValidData(email.current.value, password.current.value);
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header/>
            <div className="absolute h-full w-full">
                <img className="absolute h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"/>
                <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
                    <h1 className="font-bold text-3xl p-5">{isSignInForm ? "Sign In" : "Sign up"}</h1>
                    {
                        !isSignInForm && (
                            <input if className="p-2 m-2 w-full bg-gray-600" type="text" placeholder="Full name"/>
                        )
                    } 
                    <input ref={email} className="p-2 m-2 w-full bg-gray-600" type="email" placeholder="Email address"/>
                    <input ref={password} className="p-2 m-2 w-full bg-gray-600" type="password" placeholder="password"/>
                    {/* <input className="p-2 m-2" type="email" placeholder="Email address"></input> */}
                    <button className="p-3 m-2 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign up"}</button>
                    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to NETFLIX? Sign up now" : "Already registered? Sign-in now"}</p>
                </form>
            </div>
        </div>
    );
}
export default Login;