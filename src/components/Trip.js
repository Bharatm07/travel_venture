import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/6.jpg";
import Trip2 from "../assets/7.jpg";
import Trip3 from "../assets/8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1> Recent Trip </h1>{" "}
      <p> You can discover unique destinations using Google Maps </p>{" "}
      <div className="tripcard">
        {" "}
        <TripData
          image={Trip1}
          heading="Trip in France"
          text="France, a nation renowned for its captivating blend of art, culture, and history, stands as a beacon of European elegance and refinement. From the grandeur of the Eiffel Tower to the artistic masterpieces housed within the Louvre Museum, France exudes an aura of sophistication that has captivated travelers for centuries. Its picturesque landscapes, from the sun-drenched vineyards of Provence to the charming villages of the Loire Valley, provide a backdrop for a journey into the heart of French culture. Culinary excellence reigns supreme, with delectable pastries, exquisite wines, and Michelin-starred gastronomy enticing taste buds at every turn. Whether strolling along the Seine River in Paris or exploring the medieval castles of the Loire Valley, France offers an enchanting experience that lingers long after the journey ends."
        />{" "}
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia, a captivating tapestry of cultural diversity and natural splendor, beckons adventurers with its vibrant blend of traditions, flavors, and landscapes. From the bustling streets of Kuala Lumpur to the serene beaches of Langkawi, Malaysia offers a kaleidoscope of experiences that cater to every traveler's desire. Its rich cultural heritage, a testament to its diverse ethnic makeup, manifests in its delectable cuisine, captivating architecture, and vibrant festivals. Lush rainforests teeming with exotic wildlife and pristine beaches fringed by turquoise waters provide a haven for nature lovers. Malaysia's allure lies in its ability to seamlessly intertwine modernity with tradition, creating a harmonious symphony of old and new."
        />{" "}
        <TripData
          image={Trip3}
          heading="Trip in Australia"
          text="Australia, a land of boundless beauty and untamed wilderness, beckons explorers with its rugged landscapes, unique wildlife, and laid-back lifestyle. From the sun-drenched shores of Bondi Beach to the awe-inspiring expanse of the Outback, Australia offers a panorama of experiences that ignite the spirit of adventure. Its iconic landmarks, such as the majestic Uluru and the vibrant Sydney Opera House, stand as testaments to the nation's natural and cultural heritage. The Great Barrier Reef, a mesmerizing underwater wonderland, teems with marine life, captivating divers and snorkelers alike. Australia's allure lies in its ability to transport travelers to a world where nature reigns supreme, offering a respite from the ordinary and an invitation to embrace the extraordinary."
        />{" "}
      </div>{" "}
    </div>
  );
}

export default Trip;
