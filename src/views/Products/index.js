import "./style.css"

function Products(){
    return(
        <div className="container-fluid productos" id="Products">
            <img  className="posicion-imagen img-fluid" id="img-products" src={`../assets/section3-image.png`} alt="cabaña"/> 
                   
            <div className="row espacio"> 
                <div className="col-xl-12 "></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-4 col-md-4 col-sm-2 col-xs-12"></div>
                    <div className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-8 col-xs-12 ">
                        <div className="caja  img-fluid" id="caja-products">
                            <h6>Sed ut perspiciatis</h6>
                            <h2>Nemo Enim</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            <div className="flecha d-flex justify-content-end">
                                <a href="#" className="btn btn-primary " role="button" data-bs-toggle="button"><img src={`../assets/Icon-left.png`} alt="izquierda"/></a>
                                <a href="#" className="btn btn-primary " role="button" data-bs-toggle="button"><img src={`../assets/Icon-right.png`} alt="derecha"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-1 col-lg-4 col-md-4 col-sm-2 col-xs-12"></div>
                </div>
            </div>
        </div>
    )
}

export default Products;