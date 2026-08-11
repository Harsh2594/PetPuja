import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import "./index.css";

/**
 * Header
 *   logo
 *   Nav Items
 * Body
 *   Search
 *   RestaurantContainer
 *     RestaurantCard
 *     --Image
 *     --Name of Res,star Rating,Price,cuisine,delivery time
 * Footer
 *   links
 *   About
 *   Address
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="PetPuja" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, deliveryTime, costForTwo, location, image } =
    resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img alt="res-logo" src={image} />
      <h4>{name}</h4>
      <h5>{cuisine}</h5>
      <h5>{rating}</h5>
      <h5>{deliveryTime}</h5>
      <h5>{costForTwo}</h5>
      <h5>{location}</h5>
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: "Burger Hub",
    cuisine: "Burgers, Fast Food",
    rating: 4.5,
    deliveryTime: "25 mins",
    costForTwo: "₹400",
    location: "Hazratganj",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Pizza, Italian",
    rating: 4.3,
    deliveryTime: "30 mins",
    costForTwo: "₹500",
    location: "Gomti Nagar",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
  },
  {
    id: 3,
    name: "Biryani House",
    cuisine: "Biryani, Mughlai",
    rating: 4.7,
    deliveryTime: "35 mins",
    costForTwo: "₹600",
    location: "Aliganj",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600",
  },
  {
    id: 4,
    name: "Punjabi Tadka",
    cuisine: "North Indian",
    rating: 4.6,
    deliveryTime: "28 mins",
    costForTwo: "₹550",
    location: "Indira Nagar",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600",
  },
  {
    id: 5,
    name: "South Spice",
    cuisine: "South Indian",
    rating: 4.4,
    deliveryTime: "20 mins",
    costForTwo: "₹350",
    location: "Mahanagar",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
  },
  {
    id: 6,
    name: "Chinese Wok",
    cuisine: "Chinese",
    rating: 4.2,
    deliveryTime: "30 mins",
    costForTwo: "₹450",
    location: "Ashiyana",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600",
  },
  {
    id: 7,
    name: "BBQ Nation",
    cuisine: "Barbecue, Kebabs",
    rating: 4.8,
    deliveryTime: "40 mins",
    costForTwo: "₹900",
    location: "Hazratganj",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600",
  },
  {
    id: 8,
    name: "Roll Express",
    cuisine: "Rolls, Wraps",
    rating: 4.1,
    deliveryTime: "18 mins",
    costForTwo: "₹300",
    location: "Charbagh",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600",
  },
  {
    id: 9,
    name: "Cake World",
    cuisine: "Bakery, Desserts",
    rating: 4.6,
    deliveryTime: "22 mins",
    costForTwo: "₹450",
    location: "Jankipuram",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
  },
  {
    id: 10,
    name: "Ice Cream Factory",
    cuisine: "Desserts, Ice Cream",
    rating: 4.5,
    deliveryTime: "15 mins",
    costForTwo: "₹250",
    location: "Gomti Nagar",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
  },
  {
    id: 11,
    name: "Sushi Station",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "35 mins",
    costForTwo: "₹800",
    location: "Vibhuti Khand",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600",
  },
  {
    id: 12,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.3,
    deliveryTime: "27 mins",
    costForTwo: "₹500",
    location: "Alambagh",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600",
  },
  {
    id: 13,
    name: "Pasta Point",
    cuisine: "Italian, Pasta",
    rating: 4.4,
    deliveryTime: "26 mins",
    costForTwo: "₹550",
    location: "Rajajipuram",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600",
  },
  {
    id: 14,
    name: "Healthy Bowl",
    cuisine: "Salads, Healthy Food",
    rating: 4.5,
    deliveryTime: "20 mins",
    costForTwo: "₹450",
    location: "Gomti Nagar",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
  },
  {
    id: 15,
    name: "Chai & Snacks",
    cuisine: "Tea, Snacks",
    rating: 4.2,
    deliveryTime: "15 mins",
    costForTwo: "₹200",
    location: "Hazratganj",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" className="search-input" />
        <button className="search-botton">Search</button>
      </div>
      <div className="restaurant-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
