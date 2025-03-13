import Navbar from "./Navbar.jsx";
import { BrowserRouter } from "react-router-dom"

function Header(){
    return(
        <div>
            <h1 className="hero-title">Joseph Champeau</h1>
            <h2 className="hero-position">Software Developer</h2>

            <p className="hero-description">
                Computer Science student with a Strong interest in building fun and interesting projects!
            </p>

            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </div>
    )
}

export default Header;