import useTitle from "../../../hooks/useTitle";
import BottomBanner from "../../BottomBanner/BottomBanner";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AllToys from "../../Toys/AllToys";
import Banner from "../Banner/Banner";
import CatagoryToy from "../CatagoryToy/CatagoryToy";
import SaleSection from "../Sale Section/SaleSection";

const Home = () => {
    useTitle('Home')
    return (
        <>
        <Navbar></Navbar>
            <div>
                <div className=" lg:flex hidden justify-around w-around my-2 font-bold text-purple-600 ">
                    <h1>FREE CLICK & COLLECT WITHIN 4 HOURS</h1>
                    <h1>DELIVERY AVAILABLE 7 DAYS A WEEK</h1>
                    <h1>FREE DELIVERY ON ORDER OVER 20$</h1>
                </div>
            </div>
            <Banner></Banner>
            <h1 className="my-7 text-center text-5xl font-bold">SALE!!</h1>
            <SaleSection></SaleSection>
            <CatagoryToy></CatagoryToy>
            <AllToys></AllToys>
            <BottomBanner></BottomBanner>
            <Footer></Footer>
        </>
    );
};

export default Home;