import { Component } from "react";
import Img1 from "../assets/2.jpg";
import Img2 from "../assets/3.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2> {this.props.heading} </h2> <p> {this.props.text} </p>{" "}
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />{" "}
          <img alt="img" src={this.props.img2} />{" "}
        </div>{" "}
      </div>
    );
  }
}
export default DestinationData;
