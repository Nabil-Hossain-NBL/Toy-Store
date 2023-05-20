import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const MyToys = () => {
    const { user } = useContext(AuthContext);

    const [toys, setToys] = useState([]);
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://project-server-rust.vercel.app/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining)
                        }
                    })

            }
        })
    }


    useEffect(() => {
        fetch(`https://project-server-rust.vercel.app/my-toys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [user]);
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Toy Name</th>
                                <th>Category</th>
                                <th>Seller</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Rating</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toys?.map((toy, index) => (
                                <tr key={toy?._id}>
                                    <td>{index + 1}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCatagory}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.email}</td>
                                    <td>{toy.price} $</td>
                                    <td>{toy.quantity}</td>
                                    <td>{toy.rating}</td>
                                    <td><Link to={`/UpdateToy/${toy._id}`}><button className="border btn bg-purple-600 text-white p-1">Update</button></Link></td>
                                    <td><button onClick={() => handleDelete(toy._id)} className="border btn bg-purple-600 text-white p-1">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyToys;