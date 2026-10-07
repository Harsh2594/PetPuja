import { useEffect, useState } from "react";
import { CORS_PROXY, MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(CORS_PROXY + MENU_API + resId);

      if (!data.ok) {
        throw new Error(`HTTP Error: ${data.status}`);
      }

      const json = await data.json();

      setResInfo(json.data ?? json);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
