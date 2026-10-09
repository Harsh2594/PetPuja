const User = (props) => {
  const { name } = props;

  return (
    <div className="user-card w-[350px] rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col items-center">
        {/* Profile Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
          👤
        </div>

        {/* Name */}
        <h2 className="mt-4 text-2xl font-bold text-gray-900">{name}</h2>

        <p className="mt-1 text-sm font-medium text-orange-500">
          PetPuja Team Member
        </p>
      </div>

      {/* User Information */}
      <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">📍 Location</span>
          <span className="font-medium text-gray-800">Noida</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">📞 Contact</span>
          <span className="font-medium text-gray-800">1234567890</span>
        </div>
      </div>

      {/* Contact Button */}
      <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600">
        Contact Us
      </button>
    </div>
  );
};

export default User;
