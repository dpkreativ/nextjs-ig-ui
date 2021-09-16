import ProfileImage from "./ProfileImage";
import ProfileUserData from "./ProfileUserData";

const Header = ({ stories }) => {
  return (
    <header className="p-5 flex max-w-screen-lg mx-auto">
      <ProfileImage stories={stories} />
      <ProfileUserData />
    </header>
  );
};

export default Header;
