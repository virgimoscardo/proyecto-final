import Formulario from './formulario';
import './style.css'

function Contact() {
    
    return (
        <div className="container-fluid contacto" id="Contact"> 
            <div className="row ">
                <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                    <Formulario/>
                </div>
                <div className="col-xl-6 col-lg-5 d-none d-lg-block ">
                    <div className="container imagen-contacto">
                        <img className=" img-fluid" id="img-contacto" src={`../assets/contact-image.png`} alt="foto de contacto"/>       
                    </div>
                </div>
            </div>
        </div> 
  );
}

export default Contact;