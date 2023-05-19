import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Toy = ({ toy }) => {
    const {
        _id, img, name, sellerName, email, price, rating, quantity, discription, subCatagory,
    } = toy || {};
    const {user} = useContext(AuthContext)

    const handleViewDetail =()=>{
        if (!user) {
            Swal.fire({
                title: 'Login!',
                text: 'login first to see details',
                icon: 'error',
                confirmButtonText: 'Login'
            })
        }
    }
    return (

        <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
            <figure className="mb-2">
                <img src={img} alt="" className="h-64 ml-auto mr-auto" />
            </figure>
            <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                    <h5 className="text-white text-2xl font-bold leading-none">
                        {toy.name}
                    </h5>
                    <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span>
                </div>
                <div className="flex items-center">
                    <div className="text-lg text-white font-light">
                        ${price}
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <Link to={`details/${_id}`}>
                        <button onClick={()=>handleViewDetail(_id)} className="btn btn-primary" >View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;