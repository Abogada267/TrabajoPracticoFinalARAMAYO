import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Products from "../Products/Products";

const Home = () => {
    return (
        <> 
            <NavBar/>
            <Banner />
            <Link/>
<Products/>
            
           
        </>
    );
};

export default Home;