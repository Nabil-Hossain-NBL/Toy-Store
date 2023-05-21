import useTitle from "../../hooks/useTitle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Blog = () => {
    useTitle('Blog')
    return (
        <div className="mb-0">
            <Navbar></Navbar>
            <div>
                <h1 className="mb-5 text-2xl text-black font-bold">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className="mb-5 font-bold text-black text-1xl"> Ans: Access token authenticate the bearer that allows to access an Api. Refresh Token is a token that can allow the bearer  to refresh the access token when it expires to access the api again. we can store them in local storage or in cookies on client side</p>

                <h1 className="mb-5 text-2xl text-black font-bold">2.Compare SQL and NoSQL databases?</h1>
                <p className="mb-5 font-bold text-black text-1xl"> Ans: SQL databases are table based databases and NoSQL databases can be document based, key=value pairs, graps databases</p>

                <h1 className="mb-5 text-2xl text-black font-bold">3.What is express js? What is Nest JS?</h1>
                <p className="mb-5 font-bold text-black text-1xl"> Ans: NestJS and Express. js are frameworks, specifically for building backend web applications</p>

                <h1 className="mb-5 text-2xl text-black font-bold">4.What is MongoDB aggregate and how does it work?</h1>
                <p className="mb-5 font-bold text-black text-1xl"> Ans: MongoDB aggregate is a way of processing a large number of documents in a collection by means of passing them through different stages.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;