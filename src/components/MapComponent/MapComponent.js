import { useState } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { REACT_APP_MAP_KEY } from "../../helpers/constants";
import markerIcon from "../../assets/icons/map-marker-icon.png";
import { weekdays } from "../../helpers/constants";

import "./styles.scss";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent = ({ activeRestaurant }) => {
  const [isHovering, setIsHovering] = useState(false);

  const Map = ReactMapboxGl({
    accessToken: REACT_APP_MAP_KEY,
  });

  const handleMouseOverOut = (val) => {
    setIsHovering(val);
  };

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "calc(100% - 500px)",
      }}
      zoom={activeRestaurant.zoom}
      center={activeRestaurant.coordinates}
    >
      {activeRestaurant.isClicked && (
        <Marker coordinates={activeRestaurant.coordinates}>
          <div className="marker-icon-container">
            <img
              className="marker-icon"
              src={markerIcon}
              onMouseOver={() => handleMouseOverOut(true)}
              onMouseOut={() => handleMouseOverOut(false)}
              alt=""
            />
            {isHovering && (
              <div className="restaurant-operating-hours">
                {weekdays.map((weekday, index) => {
                  return (
                    <div key={index}>
                      {weekday} - {activeRestaurant.operatingHours[weekday]}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Marker>
      )}
    </Map>
  );
};

export default MapComponent;
