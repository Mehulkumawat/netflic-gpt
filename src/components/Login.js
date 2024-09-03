import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header/>
            <div className="absolute h-full w-full">
                <img className="absolute h-full w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"/>
                <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
                    <h1 className="font-bold text-3xl p-5">Sign In</h1>
                    <input className="p-2 m-2 w-full bg-gray-600" type="email" placeholder="Email address"></input>
                    <input className="p-2 m-2 w-full bg-gray-600" type="password" placeholder="password"></input>
                    {/* <input className="p-2 m-2" type="email" placeholder="Email address"></input> */}
                    <button className="p-3 m-2 bg-red-700 w-full rounded-lg">Sign in</button>
                </form>
            </div>
        </div>
    );
}
export default Login;