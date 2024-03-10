import React, { useState, useEffect } from "react";
import "../styles.css";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const dataJson = await response.json();
      const fetchedRestaurantData =
        dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantData(fetchedRestaurantData);
      //   console.log(fetchedRestaurantData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      {restaurantData.map((restaurant, index) => (
        <div key={index}>
          <p>{restaurant.info.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Body;
