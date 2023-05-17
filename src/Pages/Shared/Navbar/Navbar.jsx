import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const navItems = <>
        <li className=" text-white font-bold "><Link to="/">Home</Link></li>
        <li className=" text-white font-bold "><Link to="/">Blog</Link></li>
    </>

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-blue-500 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-white font-bold text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <>
                    <button className="btn btn-primary" onClick={handleLogOut}>Logout</button>
                    </>
                    :
                <Link to="/login" className="btn btn-active btn-primary">Login</Link>
                }
                {/* <Link to="/" className="btn btn-outline btn-secondary ml-2">Logout</Link> */}
                
                            
            </div>
        </div>
    );
};

export default Navbar;