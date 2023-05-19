import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const AllToysPage = () => {
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    const [activeTab, setActiveTab] = useState("a");
    const [clicked, setClicked] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);

    const handleSearch = () => {
        fetch(`http://localhost:5000/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }

    const viewAll = () => {
        setActiveTab("viewAll")
        setClicked("clicked")
        console.log(clicked);
    }

    return (
        <>
        <Navbar></Navbar>
            <div>
                <div className="flex justify-center my-4">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-xs" />
                    <button onClick={handleSearch} className="btn btn-primary mx-3">Search</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Toy Name</th>
                                <th>Category</th>
                                <th>Seller</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Rating</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toys?.map((toy, index) => (
                                <tr key={toy?._id}>
                                    <td>{index + 1}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.subCatagory}</td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.price} $</td>
                                    <td>{toy.quantity}</td>
                                    <td>{toy.rating}</td>
                                    <td><Link to={`/details/${toy._id}`}>
                                        <button className="btn btn-primary" >View</button>
                                    </Link></td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                    <div className={`flex justify-center my-4 ${clicked == "clicked" ? "hidden" : ""}`}>
                        <button onClick={viewAll} className="btn btn-primary" >View ALL</button>
                    </div>



                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllToysPage;