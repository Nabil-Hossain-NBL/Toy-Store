import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/Navbar";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    useTitle('Update')
    const toy = useLoaderData()
    const { _id, name, price, quantity, discription } = toy

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch(`https://project-server-rust.vercel.app/toy/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Updated successfully!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            });
    };
    return (
        <>
            <Navbar></Navbar>

            <h1 className=" text-5xl text-center">Update {name}</h1>
            <div className="flex justify-center h-full">
                <div>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>


                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Price: $</p>
                            <input defaultValue={price} {...register("price", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Quantity:</p>
                            <input defaultValue={quantity} type="number" {...register("quantity", { required: true })} />
                        </div>
                        <div className="mt-5 flex justify-start">
                            <p className="mr-2">Description:</p>
                            <input defaultValue={discription} type="text" {...register("discription")} />
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

export default UpdateToy;