import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PortfolioProject from './components/PortfolioProject';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';


export default function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortfolioProject />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
   
      
    </>
  )
}