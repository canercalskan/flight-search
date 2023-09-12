import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import './Loader.css'
const Loader = (props) => {
    return ( 
        <div className="loaderContainer">
            <p>Searching for flights..</p>
            <FontAwesomeIcon icon={faSpinner} spin/>
        </div>
     );
}
 
export default Loader;