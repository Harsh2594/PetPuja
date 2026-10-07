import { useEffect, useState } from "react";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useParams } from "react-router-dom";
import { CORS_PROXY, MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  //custom hooks
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(CORS_PROXY + MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <RestaurantMenuShimmer />;
  }

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
    ) || [];

  console.log(categories);

  return (
    <div className="text-center">
      {/**Categories Accordian */}
      {categories.map((category, index) => {
        return (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
