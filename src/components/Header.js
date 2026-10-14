import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { UserCircle, User, LogOut } from "lucide-react";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

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
  const handleLogout = async () => {
    try {
      await signOut(auth);

      dispatch(removeUser());

      setShowDropdown(false);

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);
    }
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
              <div className="relative">
                {/* Profile Button */}
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2"
                >
                  <img
                    src={user.photoURL}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                  />

                  <span className="font-semibold text-gray-700">
                    {user.name}
                  </span>
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {/* User information */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">{user.name}</p>

                      <p className="text-sm text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Profile */}
                    <button
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      onClick={() => {
                        setShowDropdown(false);
                        navigate("/profile");
                      }}
                    >
                      <User size={18} />
                      <span>User Profile</span>
                    </button>

                    {/* Logout */}
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-500"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <UserCircle
                  size={36}
                  className="text-gray-600 hover:cursor-pointer"
                />

                <span className="font-semibold text-gray-700">User</span>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
