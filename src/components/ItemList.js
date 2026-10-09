import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      {items.map((item) => {
        const id = item.card.info.id;

        // Find this item in Redux cart
        const cartItem = cartItems.find(
          (cartItem) => cartItem.card.info.id === id,
        );

        // If item is not in cart, quantity = 0
        const quantity = cartItem?.quantity || 0;

        return (
          <div
            key={id}
            className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between gap-4"
          >
            {/* Item Details */}
            <div className="flex-1">
              <div>
                <span className="font-semibold">{item.card.info.name}</span>

                <span className="font-semibold">
                  {" "}
                  - ₹{item.card.info.price / 100}
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-2">
                {item.card.info.description}
              </p>
            </div>

            {/* Image + Add/Quantity */}
            <div className="w-32 shrink-0">
              <div className="relative">
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-32 h-32 object-cover rounded-lg"
                  alt={item.card.info.name}
                />

                <div className="absolute left-0 right-0 -bottom-5 flex justify-center">
                  {quantity === 0 ? (
                    <button
                      className="w-16 py-1 rounded-lg bg-black text-white"
                      onClick={() => dispatch(addItem(item))}
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black text-white">
                      <button onClick={() => dispatch(removeItem(id))}>
                        -
                      </button>

                      <span>{quantity}</span>

                      <button onClick={() => dispatch(addItem(item))}>+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
