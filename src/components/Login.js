import Header from "./Header";
import {useState} from 'react';
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const handleIsSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div>
            <Header/>
            <div className="absolute h-full w-full">
                <img alt="background" className="absolute h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"/>
                <form className="absolute w-3/12 p-10 bg-black my-36 mx-auto right-0 left-0 text-white">
                    <h1 className="font-bold text-3xl p-3">{isSignUp ? "Sign Up":"Sign In"}</h1>
                    {
                        isSignUp && (
                            <input className="p-2 m-2 w-full bg-gray-600" type="text" placeholder="Full Name"></input>
                        )
                    }
                    <input className="p-2 m-2 w-full bg-gray-600" type="email" placeholder="Email address"></input>
                    <input className="p-2 m-2 w-full bg-gray-600" type="password" placeholder="password"></input>
                    {/* {isSignUp && (<input className="p-2 m-2 w-full bg-gray-600" type="password" placeholder="Confirm password"></input>)} */}

                    {/* <input className="p-2 m-2" type="email" placeholder="Email address"></input> */}
                    <button className="p-3 m-2 bg-red-700 w-full rounded-lg">{isSignUp ? "Sign Up":"Sign In"}</button>
                    <div className="newUser py-4 cursor-pointer" onClick={handleIsSignUp}>
                        {isSignUp ? "New to netflix? Sign Up now":"Already a registered ? Sign in now."}
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;