import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurnt] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-button"
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

      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
