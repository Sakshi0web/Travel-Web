import { Component } from "react";
import desImg1 from "../images/img-6.jpg";
import desImg2 from "../images/img-7.jpg";
import "./Destination.css";

class DestinationData extends Component{
    render() {
        return(
            <div className={this.props.cName}>
                <div className="des-text">
                    <h2> {this.props.heading} </h2>
                    <p> {this.props.text} </p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        );
    }
}

export default DestinationData;