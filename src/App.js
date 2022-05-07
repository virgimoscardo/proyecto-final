import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Services from './views/Services';
import Contact from './views/Contact';
import Footer from './views/Footer';

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Products/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
