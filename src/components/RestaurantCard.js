import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    locality,
    cloudinaryImageId,
  } = resData;

  const imageUrl = resData.cloudinaryImageId?.startsWith("https")
    ? cloudinaryImageId
    : CDN_URL + cloudinaryImageId;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img alt="res-logo" src={imageUrl} />
      <h4>{name}</h4>
      <h5>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</h5>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime} mins</h5>
      <h5>{costForTwo}</h5>
      <h5>{locality}</h5>
    </div>
  );
};
export default RestaurantCard;
