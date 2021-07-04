import Circle from "./Circle"
import ManoServida from "../icons/ManoServida"
import styles from './Navbar.module.css'

const Navbar = () =>{
    return(
        <nav id="navbar-principal">
            <Circle/>
            <div id="icon-principal">
                <ManoServida size={150} />
            </div>
        </nav>
    )
}

export default Navbar