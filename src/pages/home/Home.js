import Navbar from "../../components/navbar/Navbar";
import './Home.css';
import SearchField from "../../components/search-field/SearchField";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
    return ( 
        <div className="homeContainer">
            <Navbar />
            <SearchField />
        </div>
     );
}
 
export default Home;