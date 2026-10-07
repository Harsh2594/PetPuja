const Shimmer = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Search + Filter Shimmer */}
      <div className="flex justify-center items-center gap-6 my-10">
        <div className="w-72 h-12 bg-gray-200 rounded-lg animate-pulse"></div>

        <div className="w-40 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <div key={index} className="rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="w-full h-72 bg-gray-200 rounded-2xl animate-pulse"></div>

              {/* Restaurant name + rating */}
              <div className="flex justify-between items-center mt-4 px-2">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>

                <div className="h-7 w-16 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>

              {/* Cuisine + Cost */}
              <div className="flex justify-between mt-4 px-2">
                <div className="h-5 w-56 bg-gray-200 rounded animate-pulse"></div>

                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Location + Time */}
              <div className="flex justify-between mt-3 px-2">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>

                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
