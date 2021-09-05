import ProfileImage from "./ProfileImage";
import ProfileUserData from "./ProfileUserData";

const Header = () => {
  return (
    <header className="p-5 flex">
      <ProfileImage />
      <ProfileUserData />
    </header>
  );
};

export default Header;
