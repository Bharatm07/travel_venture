import Img1 from "../assets/2.jpg";
import Img2 from "../assets/3.jpg";
import Img3 from "../assets/4.jpg";
import Img4 from "../assets/5.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destination </h1>{" "}
      <p> Tours give you the opportunity to see a lot, within a time frame </p>{" "}
      <DestinationData
        className="first-des"
        heading="Varkala"
        text="Varkala, a harmonious blend of natural beauty, cultural richness,
        and rejuvenating experiences, leaves an indelible mark on every traveler 's heart. Whether seeking tranquility amidst pristine
        beaches, immersing in the town ' s vibrant culture, or indulging in
        rejuvenating experiences, Varkala promises a journey of discovery and rejuvenation, leaving you with cherished memories that linger long after your departure.
        "
        img1={Img1}
        img2={Img2}
      />{" "}
      <DestinationData
        className="first-des-reverse"
        heading="Ooty"
        text="Ooty, a symphony of natural beauty, colonial charm, and invigorating experiences, etches itself into every traveler's heart. Whether seeking tranquility amidst the hills, immersing in the town's rich heritage, or embarking on adventurous escapades, Ooty promises a rejuvenating retreat, leaving you with cherished memories that linger long after your departure."
        img1={Img3}
        img2={Img4}
      />{" "}
    </div>
  );
};

export default Destination;
