import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withNonVegLabel } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurnt] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardNonVeg = withNonVegLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?key=YOUR_API_KEY&url=https://namastedev.com/api/v1/listRestaurants",
    );

    const json = await data.json();

    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restaurants);
    setFilteredRestaurnt(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are Offline! please check your internet connection</h1>
    );
  }

  if (listOfRestaurants === 0) {
    //Conditional rendering
    <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-gray-200 rounded-xl shadow-md
               px-4 py-2 outline-none
               hover:border-gray-400
               focus:border-gray-300
               transition-colors duration-200"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="text-gray-500 px-4 py-1.5 bg-amber-500 m-4 hover:text-gray-900 focus:text-gray-900 
             text-lg rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) => {
                const search = searchText.toLowerCase();
                return (
                  res.info.name.toLowerCase().includes(search) ||
                  res.info.cuisines?.some((cuisine) =>
                    cuisine.toLowerCase().includes(search),
                  ) ||
                  res.info.locality?.toLowerCase().includes(search)
                );
              });
              setFilteredRestaurnt(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="text-gray-500 px-4 py-1.5 bg-amber-500 m-4 hover:text-gray-900 focus:text-gray-900 
             text-lg rounded-lg"
            onClick={() => {
              console.log(listOfRestaurants);
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4,
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap m-14">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCard resData={restaurant.info} />
            ) : (
              <RestaurantCardNonVeg resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
