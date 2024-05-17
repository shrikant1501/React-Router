import { IMG_URL } from "../utils/constant";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=14780&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();

      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    costForTwoMessage,
    avgRatingString,
    cuisines,
    cloudinaryImageId,
  } = resInfo.cards[2]?.card?.card?.info;

  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className="flex w-8/12 mx-auto p-4 bg-orange-200 shadow-lg">
        <div>
          <img
            className="w-48 h-48"
            id="res-image"
            src={IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="m-4 p-4">
          <h1 className="text-4xl font-bold py-2">{name}</h1>
          <p className="text-xl font-semibold">{costForTwoMessage}</p>
          <p className="text-lg font-semibold">{cuisines.join(", ")}</p>
          <p>{avgRatingString}</p>
        </div>
      </div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category?.card?.card?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
