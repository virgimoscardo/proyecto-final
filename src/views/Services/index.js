import Accordion from "./Accordion";
import "./style.css"

function Services(){
    return(
        <div className="container-fluid servicios" id="Services">
          <img className="posicion-carrera img-fluid d-none d-md-block" id="img-services" src={`../assets/section4-image.png`} alt="carrera"/>
          <div className="row ">
              <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">
                <Accordion/>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
          </div>
        </div>
    )
}

export default Services;