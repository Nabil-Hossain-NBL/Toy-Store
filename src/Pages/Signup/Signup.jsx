import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { updateProfile } from "firebase/auth";

const Signup = () => {

    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const photoUrl = form.photoUrl.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoUrl);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserData(result.user, name, photoUrl);
                navigate('/')
                setError('')
                form.reset();
                if (result.user) {
                    Swal.fire({
                        title: 'SignUp successfull!',
                        text: 'SignUp successfull',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message);
            })



    }
    const updateUserData = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" required name="photoUrl" placeholder="Photo Url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" required name="name" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                </div>
                                <p className='my-4 text-center'>{error}</p>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Signup" />
                                </div>
                            </form>
                            <p className='my-4 text-center'>already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Signup;