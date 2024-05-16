import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

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
      setresInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>

      <h2>hello</h2>
      {/* You can add more components to display menu items, categories, etc. */}
    </div>
  );
};

export default RestaurantMenu;
