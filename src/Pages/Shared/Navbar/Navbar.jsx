import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-purple-600 h-24">
            <div className="navbar-start">
                <div className="dropdown hover:bg-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-600 rounded-box w-52">
                        <li className=" text-white font-bold "><Link to="/">Home</Link></li>
                        <li className=" text-white font-bold "><Link to="/blog">Blog</Link></li>
                        {
                            user ?

                                <li className=" text-white font-bold "><Link to="/add-toy">Add Toy</Link></li>
                                :
                                ""
                        }
                        {
                            user ?

                                <li className=" text-white font-bold "><Link to="/my-toys">My Toys</Link></li>
                                :
                                ""
                        }
                        <li className=" text-white font-bold "><Link to="/all-toys-page">All Toys</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-white font-bold text-xl">ToyStore</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className=" text-white font-bold "><Link to="/">Home</Link></li>
                    <li className=" text-white font-bold "><Link to="/blog">Blog</Link></li>
                    {
                        user ?

                            <li className=" text-white font-bold "><Link to="/add-toy">Add Toy</Link></li>
                            :
                            ""
                    }
                    {
                        user ?

                            <li className=" text-white font-bold "><Link to="/my-toys">My Toys</Link></li>
                            :
                            ""
                    }

                    <li className=" text-white font-bold "><Link to="/all-toys-page">All Toys</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <>
                            <label tabIndex={0} className="btn btn-ghost btn-circle pr-3 avatar">
                                <div className="w-10 rounded-full">
                                    <img title={user?.displayName} src={user?.photoURL} />
                                </div>
                            </label>
                        </>
                        :
                        <>
                            <label tabIndex={0} className="btn btn-ghost hidden btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                        </>
                }
                {
                    user ?
                        <>
                            <button className="btn btn-primary" onClick={handleLogOut}>Logout</button>
                        </>
                        :
                        <Link to="/login" className="btn btn-active btn-primary">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;