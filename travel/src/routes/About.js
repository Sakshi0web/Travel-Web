import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../images/img-2.jpg"
import AboutUs from "../components/AboutUs";


function About(){
    return(
      <>
      <Navbar />
       <Hero 
         cName="aboutpage"
         heroImg={AboutImg}
         title="About"
         btnClass="hide"
        />
        <AboutUs />
        <Footer />
      </>
    );
}

export default About;