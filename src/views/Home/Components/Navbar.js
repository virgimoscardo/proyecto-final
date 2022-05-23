import '../style.css';

function Navbar(){
    return(
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#logo"><img src={`../assets/top-logo.png`} alt="logo25"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button> 
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Home">Home</a>
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