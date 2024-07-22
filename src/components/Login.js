import Header from "./Header";

const Login = () => {
    return (
        <div className="z-5">
            <Header/>
            <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
                <h1 className="font-bold text-3xl p-5">Sign In</h1>
                <input className="p-2 m-2 w-full bg-gray-600" type="email" placeholder="Email address"></input>
                <input className="p-2 m-2 w-full bg-gray-600" type="password" placeholder="password"></input>
                {/* <input className="p-2 m-2" type="email" placeholder="Email address"></input> */}
                <button className="p-3 m-2 bg-red-700 w-full rounded-lg">Sign in</button>
            </form>
        </div>
    );
}
export default Login;