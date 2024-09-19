import Profile from "./Profile";


const Header = () => {
  return (
    <div className="w-full lg:w-3/12 h-full bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-between relative">
      <Profile />
    </div>
  );
};

export default Header;
