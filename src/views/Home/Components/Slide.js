import '../style.css';
import Button from './Button';

function Slide(){
    return(
    <div className="container-flex">    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-inner ubicacion">
          <div className="carousel-item active">
              <img src={`../assets/slider-1.png`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
              <img src={`../assets/section3-image.png`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
              <img src={`../assets/contact-image(2).png`} className="d-block w-100" alt="..."/>
          </div>
        </div>
       <div className="carousel-indicators posicion">
            <button   type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  className="active"  aria-current="true" aria-label="Slide 1">
            </button>
            <button   type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"  aria-label="Slide 2">
            </button>
            <button   type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"   aria-label="Slide 3">
            </button>
            
        </div>
        
        <div className="container ">
           <div className="carousel-indicators cuadro-carrusel-h1 d-none d-sm-block">
                <h1>Sed ut perspiciatis unde omnis iste natus</h1>
           </div>
           <div className="carousel-indicators cuadro-carrusel-p d-none d-sm-block">
                <p className="letra-chica">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
           </div>
           <div className="carousel-indicators cuadro-carrusel-button">
                <Button/>
           </div>
        </div>
       
    </div>
    </div>
    )
}

export default Slide;