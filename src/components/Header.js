import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();

  //Selector(Hook)
  //Suscribing to the store using a selector
  const cartitem = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user.user);
  const cartItemCount = cartitem.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div className="flex justify-between items-center px-10 py-3 bg-white shadow-md border-b border-gray-100">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/home">
          <img
            className="w-25 object-contain hover:scale-105 transition-transform duration-300"
            src={LOGO_URL}
            alt="PetPuja"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center">
        <ul className="flex items-center gap-2 p-4 m-4">
          {/* Online Status */}
          <li className="px-4 py-2 text-sm font-medium text-gray-700">
            Online Status:
            <span className="ml-1">{onlineStatus ? "🟢" : "🔴"}</span>
          </li>

          {/* Home */}
          <li className="px-4 py-2 rounded-full text-gray-700 font-medium hover:text-amber-500 hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
            <Link to="/home">Home</Link>
          </li>

          {/* About Us */}
          <li className="px-4 py-2 rounded-full text-gray-700 font-medium hover:text-amber-500 hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>

          {/* Contact Us */}
          <li className="px-4 py-2 rounded-full text-gray-700 font-medium hover:text-amber-500 hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>

          {/* Cart */}
          <li className="px-4 py-2 rounded-full text-gray-700 font-medium hover:text-amber-500 hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
            <Link to="/cart">Cart({cartItemCount} items)</Link>
          </li>

          {/* Grocery */}
          <li className="px-4 py-2 rounded-full text-gray-700 font-medium hover:text-amber-500 hover:bg-orange-50 transition-colors duration-200 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>

          {/* User */}
          <li className="flex items-center ml-2">
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <span className="font-semibold text-gray-700">{user.name}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <UserCircle size={36} className="text-gray-600" />

                <span className="font-semibold text-gray-700">User</span>
              </div>
            )}
          </li>
          <button onClick={handleLogout}>Logout</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
