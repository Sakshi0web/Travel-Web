import "./Hero.css";

function Hero(props){
    return(
      <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg} /> 
            
            <div className="hero-text">
                {/* <h1> Your Journey Your Story </h1>
                <p> Choose Your Favourite Destination.</p> */}
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}> {props.buttonText} </a>
            </div>
        </div>
             
      </>
    );
}

export default Hero;