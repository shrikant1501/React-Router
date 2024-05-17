import { CDN_URL } from "../utils/constant";
const Card = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        className="w-full h-40 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="Food Image"
      />

      <div className="text-lg font-semibold truncate">{name}</div>
      <div className="text-sm text-gray-600 truncate">
        {cuisines.join(", ")}
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-gray-700">{costForTwo} Stars</div>
      </div>
      <button className="mt-4 w-full px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out">
        Order Now
      </button>
    </div>
  );
};
export default Card;
