import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    sla,
    deliveryTime,
    costForTwo,
    locality,
    cloudinaryImageId,
  } = resData;

  const imageUrl = resData.cloudinaryImageId?.startsWith("https")
    ? cloudinaryImageId
    : CDN_URL + cloudinaryImageId;

  return (
    <div
      data-testid="resCard"
      className="m-4 w-[350px] shrink-0 rounded-2xl bg-white
                 overflow-hidden cursor-pointer
                 transition-all duration-300
                 hover:shadow-xl hover:scale-[0.98]"
    >
      {/* Restaurant Image */}
      <div className="relative">
        <img
          className="w-full h-[220px] object-cover rounded-2xl"
          alt={name || "Restaurant"}
          src={imageUrl}
        />

        {/* Image Overlay */}
        <div
          className="absolute inset-x-0 bottom-0 h-20
                        bg-gradient-to-t from-black/40 to-transparent
                        rounded-b-2xl"
        ></div>
      </div>

      {/* Restaurant Details */}
      <div className="px-3 pt-3 pb-4">
        {/* Name and Rating */}
        <div className="flex justify-between items-center gap-2">
          <h3
            className="text-lg font-semibold text-gray-900
                         truncate flex-1"
          >
            {name}
          </h3>

          <span
            className="shrink-0 flex items-center gap-1
                           bg-green-700 text-white text-sm
                           font-semibold px-2 py-1 rounded-md"
          >
            {avgRating}
            <span className="text-xs">★</span>
          </span>
        </div>

        {/* Cuisines and Cost */}
        <div className="flex justify-between items-start gap-3 mt-2">
          <p className="text-gray-500 text-base truncate flex-1">
            {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
          </p>

          <p className="text-gray-500 text-sm whitespace-nowrap">
            {costForTwo}
          </p>
        </div>

        {/* Locality and Delivery Time */}
        <div className="flex justify-between items-center gap-2 mt-1">
          <p className="text-gray-400 text-base truncate flex-1">{locality}</p>

          <p className="text-gray-700 text-sm font-medium whitespace-nowrap">
            {sla.deliveryTime} mins
          </p>
        </div>
      </div>
    </div>
  );
};

//Higher Order component
//intput - RestaurantCard ->RestaurantCardPromoted
export const withNonVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 rounded-md">
          Non-veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
