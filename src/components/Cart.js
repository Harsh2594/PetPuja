import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { EMPTY_CART } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate item total
  const itemTotal = cartItems.reduce((total, item) => {
    const price =
      item?.card?.info?.price * (item.quantity || 1) ||
      item?.price * (item.quantity || 1) ||
      0;

    return total + price / 100;
  }, 0);

  const deliveryFee = 40;

  const taxesAndCharges = Math.round(itemTotal * 0.05);

  const grandTotal = itemTotal + deliveryFee + taxesAndCharges;

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center bg-gray-50 px-4">
        <div className="text-center">
          <img src={EMPTY_CART} alt="Empty Cart" className="w-64 mx-auto" />

          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            Your cart is empty
          </h1>

          <p className="text-gray-500 mt-2">
            You haven't added anything to your cart yet.
          </p>

          <Link to="/">
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Browse Restaurants
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Cart with items
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>

            <p className="text-gray-500 mt-1">
              {cartItems.length} items in your cart
            </p>
          </div>

          <button
            onClick={handleClearCart}
            className="px-4 py-2 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-50 transition"
          >
            Clear Cart
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2 space-y-5">
            {/* Restaurant Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-orange-100 flex items-center justify-center text-2xl">
                  🍽️
                </div>

                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Your Restaurant
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Delicious food delivered to your doorstep
                  </p>
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Your Items</h2>

                <span className="text-sm text-gray-500">
                  {cartItems.length} items
                </span>
              </div>

              <ItemList items={cartItems} />
            </div>

            {/* Coupon */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                🎟️ Apply Coupon
              </h2>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
                />

                <button className="px-5 py-3 border border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition">
                  APPLY
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Bill Details
              </h2>

              {/* Item Total */}
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Item Total</span>

                <span>₹{itemTotal.toFixed(2)}</span>
              </div>

              {/* Delivery Fee */}
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Delivery Fee</span>

                <span>₹{deliveryFee}</span>
              </div>

              {/* Taxes */}
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Taxes & Charges</span>

                <span>₹{taxesAndCharges}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-gray-300 my-5"></div>

              {/* Grand Total */}
              <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                <span>TO PAY</span>

                <span>₹{grandTotal.toFixed(2)}</span>
              </div>

              {/* Checkout */}
              <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition active:scale-[0.98]">
                PROCEED TO CHECKOUT
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                By placing your order, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
