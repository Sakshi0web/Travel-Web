import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactImg from "../images/img-4.jpg"
import ContactForm from "../components/ContactForm";


function Contact(){
    return(
      <>
      <Navbar />
        <Hero 
         cName="aboutpage"
         heroImg={ContactImg}
         title="Contact"
         btnClass="hide"
        />
        <ContactForm />
        <Footer />
      </>
    );
}

export default Contact;