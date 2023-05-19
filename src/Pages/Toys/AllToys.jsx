import { useEffect, useState } from "react";
import Toy from "./Toy";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    const [activeTab, setActiveTab] = useState("boy");

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="">
            <div className="tabs flex justify-center my-4 tabs-boxed bg-slate-200">
                <a onClick={() => handleTabClick("boy")} className={`tab tab-lg tab-lifted mr-4 hover:bg-white ${activeTab == "boy" ? "tab-active" : ""}`}>Boy</a>
                <a onClick={() => handleTabClick("girl")} className={`tab tab-lg tab-lifted mr-4 hover:bg-white ${activeTab == "girl" ? "tab-active" : ""}`}>Girl</a>
                <a onClick={() => handleTabClick("animal")} className={`tab tab-lg tab-lifted hover:bg-white ${activeTab == "animal" ? "tab-active" : ""}`}>Animal</a>
            </div>
            <div>
                <div className="flex items-center w-screen min-h-screen" >
                    <div className="container ml-auto mr-auto flex flex-wrap justify-center items-start">
                        <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                toys?.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToys;