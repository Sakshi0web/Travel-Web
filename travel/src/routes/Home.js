import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HomeVideo from "../videos/video-1.mp4";


function Home(){
    return(
      <>
       <Navbar />
       {/* <Hero 
         cname="homepage"
         heroVideo={HomeVideo}
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination."
         buttonText="Travel Plan"
         url="/"
         btnClass="show"
        /> */}

        <div className="homepage">
         <video alt="HomeVideo" src={HomeVideo} autoPlay loop muted className="video" /> 
         <div className="hero-text">
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourite Destination.</p>
                <a href="/" className="show"> Travel Plan </a>
            </div>
        </div>
        
        <Destination />
        <Trip />
        <Footer />
      </>
    );
}

export default Home;