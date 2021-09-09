import Link from "next/link";
import Image from "next/image";
import {
  ExploreIcon,
  HeartIcon,
  HomeIcon,
  InstagramLogo,
  MessengerIcon,
} from "../Icons";
import dp from "../../assets/images/dp.jpg";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white sticky">
      <div className="max-w-screen-lg mx-auto px-5 h-14 flex items-center justify-between">
        <div>
          <Link href="https://instagram.com">
            <div id="logo" className="pt-2 text-black">
              <InstagramLogo />
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
        <div className="flex items-center space-x-5 text-lg">
          <HomeIcon />
          <MessengerIcon />
          <ExploreIcon />
          <HeartIcon />
          <div className="w-6 h-6">
            <Image
              src={dp}
              alt="profile"
              width="22"
              height="22"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
