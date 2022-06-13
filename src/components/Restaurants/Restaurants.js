import { useEffect, useState } from "react";
import MapComponent from "../MapComponent/MapComponent";
import Restaurant from "../Restaurant/Restaurant";
import restaurantData from "../../helpers/restaurant-data.json";

import "./styles.scss";

const Restaurants = () => {
  const [restaurantDataSorted, setRestaurantDataSorted] = useState([]);
  const [activeRestaurant, setActiveRestaurant] = useState({
    coordinates: [-74.006179, 40.703784],
    zoom: [8],
    isClicked: false,
    operatingHours: {},
  });

  useEffect(() => {
    //FOR FUTURE: GET RESTAURANTS LIST FROM BACKEND THEN SORT BY RATING
    setRestaurantDataSorted(
      restaurantData.restaurants.sort((a, b) => b.rate - a.rate)
    );
  }, []);

  return (
    <div className="list-map">
      <div className="list">
        {restaurantDataSorted.map((restaurant) => {
          return (
            <Restaurant
              data={restaurant}
              setActiveRestaurant={setActiveRestaurant}
              key={restaurant.id}
            />
          );
        })}
      </div>
      <MapComponent activeRestaurant={activeRestaurant} />
    </div>
  );
};

export default Restaurants;
