import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    const id = item.card.info.id;

    setQuantities((prev) => ({
      ...prev,
      [id]: 1,
    }));
    //Dispatch an Ation
    dispatch(addItem(item));
  };
  const increaseQuantity = (item) => {
    const id = item.card.info.id;

    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };
  const decreaseQuantity = (item) => {
    const id = item.card.info.id;

    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 0),
    }));
  };
  return (
    <div>
      {items.map((item) => {
        const id = item.card.info.id;
        const quantity = quantities[id] || 0;
        return (
          <div
            key={item.card.info.id}
            className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between gap-4"
          >
            <div className="flex-1">
              <div>
                <span className="font-semibold">{item.card.info.name} </span>
                <span className="font-semibold">
                  - ₹{item.card.info.price / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {item.card.info.description}
              </p>
            </div>
            {/* Right side - Image */}
            <div className="w-32 shrink-0">
              <div className="absolute">
                {quantity === 0 ? (
                  <button
                    className=" mx-9 my-25 w-16 py-1 rounded-lg bg-black text-white"
                    onClick={() => handleAddItem(item)}
                  >
                    Add
                  </button>
                ) : (
                  <div className="p-2 mx-9 my-25 flex items-center gap-2 px-2 py-1 rounded-lg bg-black text-white">
                    <button onClick={() => decreaseQuantity(item)}>-</button>

                    <span> {quantity} </span>

                    <button onClick={() => increaseQuantity(item)}>+</button>
                  </div>
                )}
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-32 h-32 object-cover rounded-lg"
                alt={item.card.info.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
