import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import ServiceImg from "../images/img-3.jpg"

function Service(){
    return(
      <>
      <Navbar />
      <Hero 
         cName="aboutpage"
         heroImg={ServiceImg}
         title="Service"
         btnClass="hide"
        />
        <Trip />
        <Footer />
      </>
    );
}

export default Service;