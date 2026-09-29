// import { CORS_PROXY, RES_CARD_API } from "./constants";
// import { useEffect, useState } from "react";
// import resList from "./mockData";

// const useRestaurantCard = (resList) => {
//   const [listOfRestaurants, setListOfRestaurant] = useState(resList);
//   const [filteredRestaurant, setFilteredRestaurnt] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(CORS_PROXY + RES_CARD_API);

//     const json = await data.json();

//     const restaurants =
//       json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants;
//     setListOfRestaurant(restaurants);
//     setFilteredRestaurnt(restaurants);
//   };
//   return listOfRestaurants;
// };
// export default useRestaurantCard;
