import {useState, useContext} from 'react'
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
import Toggle from './components/Toggle/Toggle';
import { ThemeContext } from './Context';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div  style={{
      backgroundColor: darkMode ? "white" : "#0f1421",
      color: darkMode ? "#0f1421" : "white",
      /* color: darkMode && "white", */
    }}>
      
      <Navbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/> 
      
        <Toggle />
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
  );
}

export default App;
