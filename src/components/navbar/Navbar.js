import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbarContainer">
            <div className="navbarBrandField">
                <FontAwesomeIcon icon={faPlane} color="#DC4C64" size="xl"/>
                <p style={{ paddingLeft: '.5rem', color:'white', letterSpacing: '.8px'}}>
                    Flight
                    <span style={{color:'#DC4C64'}}>
                        Search
                    </span>
                </p>
            </div>

            <a href="https://www.linkedin.com/in/caner-eren-%C3%A7al%C4%B1%C5%9Fkan-7a16a61a9/" target="_blank" id="canererencaliskan">
                Caner Eren Çalışkan
            </a>
        </div>
     );
}
 
export default Navbar;