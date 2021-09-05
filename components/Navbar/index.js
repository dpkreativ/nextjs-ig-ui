import Image from "next/image";
import Link from "next/link";
import { HomeIcon, MessengerIcon } from "../Icons";
import logo from "../../assets/images/instagram_logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-screen-lg mx-auto px-5 h-14 flex items-center justify-between">
        <div>
          <Link href="https://instagram.com">
            <div id="logo" className="pt-3">
              <Image
                src={
                  "https://res.cloudinary.com/dpkreativ/image/upload/v1630370789/instagram/instagram_logo_fnavxd.png" ||
                  logo
                }
                width="103px"
                height="29px"
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:block">
          <input
            type="search"
            name="search"
            id="search"
            className="bg-gray-50 border border-gray-200 rounded-sm outline-none px-4 py-1 text-sm w-52"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center space-x-4 text-lg">
          <HomeIcon />
          <MessengerIcon />
          <div className="w-6 h-6">
            <img
              src="https://res.cloudinary.com/dpkreativ/image/upload/v1616357794/IMG_-oi62yk_wtfop2.jpg"
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
