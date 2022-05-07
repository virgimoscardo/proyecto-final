

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <img src={`../assets/top-logo.png`} alt="logo25"/>               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#Products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Services">Services</a>
                        </li>
                        <li className="nav-item">
                             <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>          
        </nav>
    )
}

export default Navbar;