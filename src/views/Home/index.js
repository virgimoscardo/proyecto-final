import './style.css';
import Navbar from './Components/Navbar';
import Slide from './Components/Slide';

function Home (){
    return(
        <div  className="container-fluid">
           <Navbar/>
           <Slide/>
        </div>

    )
}

export default Home;