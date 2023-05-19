import { Link } from "react-router-dom";


const SaleSection = () => {
    return (
        <div className="flex flex-col lg:flex-row itesms-center max-w-6xl text-center lg:justify-between m-auto">
            <div className="card mt-5 m-auto lg:mr-6 w-auto bg-slate-200 ">
                <figure><img src="https://image.smythstoys.com/images/secondary/toys/gabbys-dollhouse-05-23-8c5491.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="mb-5 text-3xl font-bold">Up to 20% off</h2>
                    <p className="mb-5 text-1xl ">selected Gabbys Dollhouse toys</p>
                    <Link to={'/all-toys-page'}><button className="btn rounded-full btn-outline text-black  hover:bg-white"><span className=" text-black">Shop Now</span></button></Link>
                </div>
            </div>
            <div className="card mt-5 m-auto w-auto bg-slate-200 ">
                <figure><img src="https://image.smythstoys.com/images/secondary/toys/water-art-220439-05-23-009ceb.webp" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="mb-5 text-3xl font-bold">NEW</h2>
                    <p className="mb-5 text-1xl ">Bring your drawings to life with Water Art!</p>
                    <Link to={'/all-toys-page'}><button className="btn rounded-full btn-outline text-black  hover:bg-white"><span className=" text-black">Shop Now</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default SaleSection;