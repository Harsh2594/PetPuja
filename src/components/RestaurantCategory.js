import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);
  // const [showItems, setShowItems] = useState();
  const handleClick = () => {
    setShowIndex();
  };
  const itemCards =
    data?.categories?.flatMap((category) => category?.itemCards || []) || [];

  return (
    <div>
      {/**header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium text-lg">
            {data.title}({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/**Accordian body */}
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
