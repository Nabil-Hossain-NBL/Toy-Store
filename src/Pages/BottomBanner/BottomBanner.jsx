import { Link } from "react-router-dom";


const BottomBanner = () => {
    return (
        <div className="hero min-h-screen mb-7"  style={{ backgroundImage: `url("https://image.smythstoys.com/images/primary/desktop/homepage/pokemon-party-05-23-f37a83.jpg")` }}>
            <div className="hero-overlay bg-opacity-30 lg:bg-opacity-0"></div>
            <div className="hero-content flex lg:w-11/12 justify-start text-center lg:justify-start lg:text-start text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-black font-bold">In-store Saturday 27th May</h1>
                    <p className="mb-5 font-bold text-black text-2xl">Pokémon TCG Trade & Play | FREE Giveaways* Candyfloss* & Face Painters</p>
                    <Link to={'/all-toys-page'}><button className="btn rounded-full btn-outline text-black  hover:bg-white"><span className=" text-black">Shop Now</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;