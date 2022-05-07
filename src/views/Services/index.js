import Accordion from "./Accordion";
import "./style.css"

function Services(){
    return(
        <section id="Services">
          <img id="img-services" src={`../assets/section4-image.png`} alt="carrera"/>
          <Accordion/>    
        </section>
    )
}

export default Services;