import { Link } from "react-router-dom";

const Banner = () => {
    return (

        <div className="hero min-h-screen mb-7"  style={{ backgroundImage: `url("https://image.smythstoys.com/images/primary/desktop/outdoor/step-2-discovery-pond-203281-05-22-00aeef.jpg")` }}>
            <div className="hero-overlay bg-opacity-30 lg:bg-opacity-0"></div>
            <div className="hero-content flex lg:w-11/12 justify-start text-center lg:justify-start lg:text-start text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Looking for toys?</h1>
                    <p className="mb-5 font-bold text-2xl">Click this button bellow to see all of our great toys</p>
                    <Link to={'/all-toys-page'}><button className="btn rounded-full btn-outline text-white  hover:bg-white hover:text-black"><span className="hover:text-black">Shop Now</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;