// import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" px-1  ">
      <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between  shadow sm:items-baseline w-full bg-green-700">
        <div className=" bg-red-500 text-2xl box-border no-underline text-grey-darkest hover:text-blue-dark mb-2 sm:mb-0">
          FoodOrder
        </div>
        {/* <a href="#">Home</a>
        <a href="#">Menu</a> */}
        <div>
          <Link to="About">About Us</Link>
          <Link to="Contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
