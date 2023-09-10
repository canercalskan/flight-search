import Navbar from "../../components/navbar/Navbar";
import './Home.css';
import SearchField from "../../components/search-field/SearchField";

const Home = () => {

    return ( 
        <div className="homeContainer">
            <Navbar />
            <SearchField />
        </div>
     );
}
 
export default Home;