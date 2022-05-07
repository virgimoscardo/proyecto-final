import './style.css';
import Navbar from './Components/Navbar';
import Button from './Components/Button';

function Home (){
    return(
        <div id="Home">
           <Navbar/>
           <h1>Sed ut perspiciatis unde omnis iste natus</h1>
           <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
           <Button/>
        </div>

    )
}

export default Home;