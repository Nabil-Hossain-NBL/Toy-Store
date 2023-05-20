import { useForm } from "react-hook-form";
import Footer from "../Shared/Footer/Footer";
import Navbar from '../Shared/Navbar/Navbar';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        fetch("https://project-server-rust.vercel.app/add-toy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        console.log(data);
        e.target.reset();
    };
    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-center h-full">
                <div>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mt-5 flex justify-start ">
                            <p className="mr-2">Toy Picture: </p>
                            <input type="url" {...register("img", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Toy Name</p>
                            <input  {...register("name", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Seller Name</p>
                            <input defaultValue={user?.sellerName} {...register("sellerName", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Seller Email</p>
                            <input type="email" value={user?.email || ""} readOnly {...register("email", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Price: $</p>
                            <input {...register("price", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Rating:</p>
                            <input type="number" {...register("rating", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Quantity:</p>
                            <input type="number" {...register("quantity", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Description:</p>
                            <input type="text" {...register("discription")} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Sub-Catagarory</p>
                            <select {...register("subCatagory")}>
                                <option value="boy">boy</option>
                                <option value="girl">girl</option>
                                <option value="animal">animal</option>
                            </select>
                        </div>
                        <div className="mt-5 flex justify-center">
                            <button className=" text-center btn btn-primary"><input type="submit" /></button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddToy;