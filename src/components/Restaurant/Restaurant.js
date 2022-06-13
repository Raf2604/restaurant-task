import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./styles.scss";

const Restaurant = ({ data, setActiveRestaurant }) => {
  return (
    <div
      className="restaurant-container"
      onClick={() =>
        setActiveRestaurant({
          coordinates: [data.latlng.lng, data.latlng.lat],
          zoom: [17],
          isClicked: true,
          operatingHours: data.operating_hours,
        })
      }
    >
      <div>
        <p className="restaurant-name">{data.name}</p>
        <p className="restaurant-address">Address: {data.address}</p>
        <div className="restaurant-rate">
          Rate: {data.rate}
          <StarRatings
            rating={data.rate}
            starRatedColor="#e99324"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="0"
          />
        </div>

        <p className="restaurant-type">Cuisine Type: {data.cuisine_type}</p>
      </div>
      <Link to={`restaurant/${data.id}`}>View Restaurnat</Link>
    </div>
  );
};

export default Restaurant;
