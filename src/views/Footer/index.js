import "./style.css";

function Footer(){
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-8 col-xs-12">
                        <h6>2020 © All rights reserved.</h6>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-12">
                        <img src={`../assets/footer-logo.png`} alt="logo"/>
                    </div>
                </div>
            </div>
        </footer>  
    )
}

export default Footer;