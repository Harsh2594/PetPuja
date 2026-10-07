const RestaurantMenuShimmer = () => {
  return (
    <div className="w-6/12 mx-auto mt-8">
      {/* Restaurant name */}
      <div className="h-8 w-72 bg-gray-200 rounded mx-auto animate-pulse"></div>

      {/* Restaurant details */}
      <div className="h-5 w-52 bg-gray-200 rounded mx-auto mt-4 animate-pulse"></div>

      {/* Categories */}
      <div className="mt-10 space-y-5">
        {Array(3)
          .fill("")
          .map((_, index) => (
            <div key={index} className="bg-gray-50 shadow-lg p-5">
              {/* Category header */}
              <div className="flex justify-between items-center">
                {/* Category title */}
                <div className="h-6 w-56 bg-gray-200 rounded animate-pulse"></div>

                {/* Arrow */}
                <div className="h-6 w-6 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
