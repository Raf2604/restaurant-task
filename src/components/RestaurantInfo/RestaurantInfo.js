import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Feedback from "./Feedback/Feedback";
import Review from "./Review/Review";
import { weekdays } from "../../helpers/constants";
import restaurantData from "../../helpers/restaurant-data.json";
import "./styles.scss";

const RestaurantInfo = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    //FOR FUTURE: GET CURRENT RESTAURANT INFO FROM BACKEND
    const currentRestaurant = restaurantData.restaurants.find(
      (element) => element.id.toString() === id
    );
    setRestaurant(currentRestaurant);
  }, [id]);

  return (
    <>
      {!restaurant ? (
        <>
          <p>Restaurant not found</p>
          <Link to="/">Go Home</Link>
        </>
      ) : !Object.keys(restaurant).length ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="restaurant-info">Restaurant Info</p>
          <div className="restaurant-page">
            <div className="restaurant-component">
              <h3 className="restaurant-name">
                <span>Name:</span> {restaurant.name}
              </h3>
              <p className="restaurant-description">
                <span>Address:</span> {restaurant.address}
              </p>
              <div className="restaurant-description">
                <span>Rate:</span> {restaurant.rate}
                <StarRatings
                  rating={restaurant.rate}
                  starRatedColor="#e99324"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="0"
                />
              </div>
              <p className="restaurant-description">
                <span>Cuisine Type:</span> {restaurant.cuisine_type}
              </p>
              <p className="restaurant-description">
                <span>Neighborhood:</span> {restaurant.neighborhood}
              </p>
              <div className="restaurant-description">
                <span>Operating hours:</span>
                {weekdays.map((weekday, index) => {
                  return (
                    <div key={index}>
                      {weekday} - {restaurant.operating_hours[weekday]}
                    </div>
                  );
                })}
              </div>
              <div className="restaurant-description">
                <span>Reviews:</span>
                <div className="restaurant-reviews">
                  {restaurant.reviews.map((item, index) => {
                    return <Review key={index} review={item} />;
                  })}
                </div>
              </div>
            </div>
            <Feedback />
          </div>
        </>
      )}
    </>
  );
};

export default RestaurantInfo;
