import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import Description from './components/Description/Description';
import Offer from './components/Offer/Offer';
import Benefits from './components/Benefits/Benefits';
import Cards from './components/Benefits/Cards';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Brands from './components/Brands/Brands';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Navbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/> 
      <div>
        <Description />
        <Offer />
        <Benefits />
        <Cards />
        <Services />
        <Work />
        <Brands />
        <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
