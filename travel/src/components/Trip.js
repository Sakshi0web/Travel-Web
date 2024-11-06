import "./Trip.css";
import TripData from "./TripData";
import trip0 from "../images/img-4.jpg";
import trip1 from "../images/img-8.jpg";
import trip2 from "../images/img-9.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            
            <div className="tripcard">
                <TripData 
                    image={trip0}
                    heading= "Trip in Indonesia"
                    text = "Indonesia, fdsgf gbdfvb gb vtrty trr rtfw 6u tryy yhd  ryreg ytfg thtr rtrgd hyrhfgh rgh frg rgf e g et4rtyyeyey hefb fb jbr vbfb bj bm."
                />
                <TripData 
                    image={trip1}
                    heading= "Trip in France"
                    text = "France, fdsgf gbdfvb gb vtrty trr rtfw 6u tryy yhd  ryreg ytfg thtr rtrgd hyrhfgh rgh frg rgf e g et4rtyyeyey hefb fb jbr vbfb bj bm."
                />
                <TripData 
                    image={trip2}
                    heading= "Trip in Iceland"
                    text = "Iceland, fdsgf gbdfvb gb vtrty trr rtfw 6u tryy yhd  ryreg ytfg thtr rtrgd hyrhfgh rgh frg rgf e g et4rtyyeyey hefb fb jbr vbfb bj bm."
                />
            </div>
        </div>
    );
}

export default Trip;