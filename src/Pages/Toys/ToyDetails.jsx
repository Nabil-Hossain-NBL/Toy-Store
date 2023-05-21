import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { FaStar } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
    const { id } = useParams()

    const [details, setDetails] = useState([]);
    useTitle(`${details.name}`)

    useEffect(() => {
        fetch(`https://project-server-rust.vercel.app/toy/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setDetails(result);
            });
    }, [id]);

    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex w-full flex-col justify-around lg:flex-row">
                    <img src={details.img} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className="card w-96 h-full p-2 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="">
                                <span className=' flex justify-items-start items-center'>Rating: <span className="font-bold px-1">{details.rating}</span><FaStar className='mr-2'></FaStar></span>  
                            </div>

                            <h2 className="card-title font-bold text-3xl">{details.name}</h2>
                            <p className="font-bold text-red-500 text-1xl">${details.price}</p>
                            <p>{details.discription}</p>
                            <span>available quantity: <span className='font-bold' >{details.quantity}</span></span>

                            <hr />
                            <div>
                                <h2 className=" font-bold ">Seller: {details.sellerName}</h2>
                                <h2 className=" font-bold ">Email: {details.email}</h2>
                            </div>
                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ToyDetails;